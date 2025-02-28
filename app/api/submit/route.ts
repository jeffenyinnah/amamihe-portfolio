import { NextResponse } from "next/server";

const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    // Send the form data to Google Apps Script
    if (!GOOGLE_SCRIPT_URL) {
      throw new Error("GOOGLE_SCRIPT_URL is not defined.");
    }

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Failed to submit form to Google Apps Script.");
    }

    const result = await response.text();
    return NextResponse.json({
      message: "Form submitted successfully!",
      result,
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "Failed to submit form." },
      { status: 500 }
    );
  }
}
