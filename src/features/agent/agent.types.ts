export type Message = {
  role: "user" | "agent";
  text: string;
};

export type TaskResponse = {
  id: string;
  status: { state: string };
  artifacts: { parts: { type: string; text: string }[] }[];
};
