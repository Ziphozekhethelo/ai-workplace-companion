export type ResearchResult = {
  summary: string;
  insights: string[];
  points: string[];
  recommendations: string[];
};

const stopWords = new Set(["the", "and", "that", "with", "from", "this", "have", "were", "will", "your", "their", "into", "about", "while", "which", "when", "what", "where", "been", "being"]);

const cleanSentences = (value: string) =>
  value.replace(/\s+/g, " ").trim().split(/(?<=[.!?])\s+/).filter((item) => item.length > 24);

const keywords = (value: string) => {
  const counts = new Map<string, number>();
  value.toLowerCase().match(/[a-z][a-z-]{3,}/g)?.forEach((word) => {
    if (!stopWords.has(word)) counts.set(word, (counts.get(word) ?? 0) + 1);
  });
  return [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 5).map(([word]) => word);
};

export function createResearchResult(topic: string, text: string): ResearchResult {
  const source = text.trim() || `${topic} is the focus of this workplace research request. The team needs a concise view of its likely impact, constraints, stakeholders, and next actions.`;
  const sentences = cleanSentences(source);
  const terms = keywords(source);
  const subject = topic.trim() || terms.slice(0, 2).join(" and ") || "the submitted material";
  const strongest = sentences.slice(0, 3);
  return {
    summary: strongest.join(" ") || `This review focuses on ${subject}, its workplace implications, and the decisions the team should clarify before acting.`,
    insights: [
      `${subject} is most closely connected to ${terms.slice(0, 3).join(", ") || "execution, alignment, and measurable outcomes"}.`,
      strongest[1] ? `A central signal is: ${strongest[1]}` : "The available context suggests alignment and ownership will matter as much as the proposed action.",
      `The evidence should be tested against the needs of the people responsible for ${terms[0] || "delivery"}.`,
    ],
    points: strongest.length ? strongest : [`Define the intended outcome for ${subject}.`, "Identify the owners, timing, and evidence needed.", "Document risks and assumptions before implementation."],
    recommendations: [
      `Confirm the success measure for ${subject} with the accountable owner.`,
      `Run a small review using ${terms.slice(0, 2).join(" and ") || "stakeholder feedback"} before making a broad change.`,
      "Record assumptions, open questions, and a decision date in the project plan.",
    ],
  };
}

export function workplaceReply(prompt: string) {
  const lower = prompt.toLowerCase();
  if (lower.includes("meeting")) return "To make the meeting useful, send a one-sentence decision goal beforehand, limit updates to written notes, and reserve the live time for unresolved trade-offs. End with a named owner and due date for each action.";
  if (lower.includes("email") || lower.includes("message")) return "Use a direct structure: context, the decision or request, the deadline, and the next step. Keep the opening factual and close with one clear action rather than several optional asks.";
  if (lower.includes("priorit") || lower.includes("overwhelm")) return "Start with the task that is both time-sensitive and blocks other people. Protect one focused work block for it, then batch short administrative tasks. Renegotiate lower-impact deadlines rather than silently overloading the day.";
  if (lower.includes("feedback") || lower.includes("conflict")) return "Anchor the conversation in an observable example, explain its impact, then ask for their perspective. Agree on one behavior to try next and a date to check progress; avoid guessing at intent.";
  const terms = keywords(prompt);
  return `For ${terms.slice(0, 2).join(" and ") || "this workplace question"}, first define the decision you need to make and who owns it. Gather the smallest useful set of facts, list the main trade-off, and finish with a specific next action, owner, and review date.`;
}