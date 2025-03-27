"server-only";

export const token = "skz5eOQooi98Jl9bU1BjkTpPvaSSGSQwficsvsjFijLD6Z7RDBq2xPdi3m368ZsuwmiD0pBjvAwrgKBJglQaMk1CW1KvdOipVLODfYWBvSlkqpRNDJnT0QmdNYfdfrfjxKK9Ng8SKJcV6hEyoaiMS9YyK4kVuRDg0wpYWLxGSSUh2gAVahzm"

if (!token) {
  console.error("环境变量 SANITY_API_READ_TOKEN 未设置。请检查您的 .env 文件。");
  throw new Error("缺少 SANITY_API_READ_TOKEN 环境变量。请在 .env 文件中设置此变量。");
}
