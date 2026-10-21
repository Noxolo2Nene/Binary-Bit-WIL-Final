# Binary-Bit-WIL-Final - Secure Cloud Monitoring

**Student:** Noxolo Nene | **WIL 2026**
**Repo:** Binary-Bit-WIL-Final Private

### Project Description
Secure Cloud-Based Centralized Website Monitoring with Primary-Backup architecture.

### Architecture
- **Primary Server:** 192.168.20.10:3001 (AWS EC2 - Pretoria DC)
    - Local dev: http://localhost:3001 → Maps to 192.168.20.10
- **Backup Server:** 192.168.20.11:3001 (Automatic failover sync)
- **Branch Site:** Johannesburg Branch - 192.168.30.5 ONLINE
- **VPN Tunnel:** 10.8.0.x range replaces Google Meet for secure video (Socket.io)

### Tech Stack
- Backend: Node.js, Express, Socket.io, JWT (binary-bit-224653549)
- Frontend: HTML/JS Monitor Dashboard
- Security: JWT Auth, IP Whitelist, TLS

### How to Run
1. cd Bckend
2. npm install
3. node server.js
4. Open frntd/index.html → Click "Send Monitor packet to 192.168.20.10"

### API Endpoints
- POST /api/login
- POST /api/monitor
- Socket.io: /private-meet (replaces Google Meet)

### Status
✅ Primary 192.168.20.10 RUNNING
✅ Johannesburg Monitor ONLINE
✅ Backup Sync to 192.168.20.11 Ready
