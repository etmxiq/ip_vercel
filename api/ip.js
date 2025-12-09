export default function handler(req, res) {
  // 设置 CORS 头，允许任何网站访问
  res.setHeader("Access-Control-Allow-Origin", "https://myipdns.com");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // 处理预检请求
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // 获取真实 IP
  const ip =
    req.headers["x-real-ip"] ||
    req.headers["x-forwarded-for"]?.split(",")[0] ||
    req.socket.remoteAddress ||
    "unknown";

  res.status(200).json({ ip });
}
