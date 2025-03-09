/*eslint-disable @typescript-eslint/no-explicit-any */

import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const token = process.env.GITHUB_TOKEN; // Store your token in .env.local
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page") || "1"; // Default to page 1
  const perPage = searchParams.get("perPage") || "6"; // Default to 6 items per page

  try {
    // Fetch all repositories (public and private) for the authenticated user
    const reposResponse = await fetch(
      `https://api.github.com/user/repos?sort=updated&direction=desc&page=${page}&per_page=${perPage}`,
      {
        headers: {
          Authorization: `token ${token}`,
          Accept: "application/vnd.github.v3+json",
        },
      }
    );
    const repos = await reposResponse.json();

    // Fetch commit counts for each repo
    const reposWithCommits = await Promise.all(
      repos.map(async (repo: any) => {
        const commitsResponse = await fetch(
          `https://api.github.com/repos/${repo.owner.login}/${repo.name}/commits`,
          {
            headers: {
              Authorization: `token ${token}`,
              Accept: "application/vnd.github.v3+json",
            },
          }
        );
        const commits = await commitsResponse.json();
        return {
          name: repo.name,
          commitCount: commits.length,
          updated_at: repo.updated_at,
          url: repo.html_url, // Include the repository URL
          private: repo.private, // Include private status
        };
      })
    );

    // Get total number of repositories for pagination
    const totalReposResponse = await fetch(`https://api.github.com/user`, {
      headers: {
        Authorization: `token ${token}`,
        Accept: "application/vnd.github.v3+json",
      },
    });
    const { total_private_repos, public_repos } =
      await totalReposResponse.json();
    const totalRepos = total_private_repos + public_repos;

    return NextResponse.json({
      repos: reposWithCommits,
      totalRepos,
      page: parseInt(page),
      perPage: parseInt(perPage),
    });
  } catch (error: unknown) {
    console.error("Error fetching GitHub data:", error);
    return NextResponse.json(
      { error: "Failed to fetch GitHub data" },
      { status: 500 }
    );
  }
}
