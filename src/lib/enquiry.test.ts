import { describe, expect, it } from "vitest";
import { buildMailto, buildWhatsApp, formatEnquiry } from "./enquiry";

describe("enquiry delivery", () => {
  it("sends enquiries to the RK Associate email", () => {
    expect(buildMailto("Hi", "Body")).toMatch(/^mailto:adityashrivastav022@gmail\.com\?/);
  });

  it("opens WhatsApp chat on 8103519944 with India code", () => {
    expect(buildWhatsApp("Hello")).toBe("https://wa.me/918103519944?text=Hello");
  });

  it("skips empty fields in the message", () => {
    const text = formatEnquiry("Training enquiry", [
      { label: "Name", value: "Riya" },
      { label: "Message", value: "  " },
    ]);
    expect(text).toBe("Training enquiry\n\nName: Riya");
  });
});
