/*eslint-disable @typescript-eslint/no-unused-vars */

"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { GitBranch, GitCommit, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Repo {
  name: string;
  commitCount: number;
  updated_at: string;
  url: string;
  private: boolean;
}

export default function GithubDisplay() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [page, setPage] = useState(1); // Current page
  const [perPage, setPerPage] = useState(6); // Items per page
  const [totalRepos, setTotalRepos] = useState(0); // Total number of repositories

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/github?page=${page}&perPage=${perPage}`);
        const { repos: data, totalRepos } = await res.json();
        setRepos(data);
        setTotalRepos(totalRepos);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 18000000); // Fetch every 2 hours

    // Set visibility for animation
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("github-section");
    if (section) {
      observer.observe(section);
    }

    return () => {
      clearInterval(interval);
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [page, perPage]); // Refetch data when page or perPage changes

  // Format date to be more readable
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(date);
  };

  // Get relative time (e.g. "2 days ago")
  const getRelativeTime = (dateString: string) => {
    const date = new Date(dateString);
    const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

    const daysDiff = Math.round(
      (date.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
    );

    if (daysDiff === 0) return "Today";
    if (daysDiff === -1) return "Yesterday";
    if (daysDiff > -7 && daysDiff < 0) return rtf.format(daysDiff, "day");

    return formatDate(dateString);
  };

  // Handle page change
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  // Calculate total pages
  const totalPages = Math.ceil(totalRepos / perPage);

  return (
    <section
      id="github-section"
      className="py-24 px-6 md:px-12 lg:px-24 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <div
              className={`inline-block px-3 py-1 bg-secondary rounded-full text-sm font-medium mb-4 transition-all duration-500 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              GitHub
            </div>

            <h2
              className={`text-3xl md:text-4xl font-bold transition-all duration-500 delay-100 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              My Repositories
            </h2>
          </div>
          <Link
            href="https://github.com/jeffenyinnah"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 mt-4 md:mt-0 text-sm font-medium transition-all duration-500 delay-200 hover:gap-3 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            View GitHub profile <ArrowRight size={16} />
          </Link>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <Skeleton className="h-6 w-2/3" />
                </CardHeader>
                <CardContent className="space-y-4">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {repos.map((repo) => (
              <div key={repo.name}>
                <Card className="overflow-hidden transition-all hover:shadow-md">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center justify-between">
                      <span className="truncate">{repo.name}</span>
                      <Badge
                        variant="outline"
                        className="ml-2 whitespace-nowrap"
                      >
                        <GitBranch className="mr-1 h-3 w-3" />
                        {repo.private ? "Private" : "Public"}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center text-sm">
                      <GitCommit className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">{repo.commitCount}</span>
                      <span className="ml-1 text-muted-foreground">
                        {repo.commitCount === 1 ? "commit" : "commits"}
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="mr-2 h-4 w-4" />
                      <span>Updated {getRelativeTime(repo.updated_at)}</span>
                    </div>
                    {repo.private ? (
                      <div className="text-sm text-muted-foreground">
                        Private repository (link disabled)
                      </div>
                    ) : (
                      <Link
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-medium hover:gap-2 transition-all"
                      >
                        View repository <ArrowRight size={14} />
                      </Link>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        )}

        {/* Pagination Controls */}
        <div className="flex justify-center gap-4 mt-8">
          <Button
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
          >
            Previous
          </Button>
          <span className="flex items-center text-sm text-muted-foreground">
            Page {page} of {totalPages}
          </span>
          <Button
            onClick={() => handlePageChange(page + 1)}
            disabled={page === totalPages}
          >
            Next
          </Button>
        </div>

        {!loading && repos.length === 0 && (
          <div
            className={`rounded-3xl border border-border/50 p-8 text-center transition-all duration-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-lg font-medium">No repositories found</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              There are no repositories to display at this time.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
