const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: "*" } });

app.use(cors());
app.use(express.json());

const SECRET = "binary-bit-224653549";

app.post('/api/login', (req, res) => {
  const token = jwt.sign({ username: req.body.username }, SECRET, { expiresIn: '2h' });
  res.json({ token, vpn_ip: "10.8.0.10", message: "Secure login - OpenVPN Port 1194 ACTIVE" });
});

const upload = multer({ dest: 'uploads/' });
app.post('/api/upload', upload.single('file'), (req, res) => {
  io.emit('fileAlert', { file: req.file.originalname });
  res.json({ message: "File transferred securely" });
});

app.post('/api/monitor', (req, res) => {
  io.emit('siteStatus', req.body);
  res.json({ received: true });
});

app.get('/', (req, res) => {
  res.json({ server: "Central AWS Primary 192.168.20.10", status: "GREEN ONLINE", vpn: "10.8.0.10-14" });
});

io.on('connection', (socket) => {
  socket.on('chatMessage', (data) => {
    io.emit('chatMessage', data);
  });
});

server.listen(3001, () => {
  console.log('Binary Bit Portal RUNNING on http://localhost:3001');
  console.log('Maps to AWS: 192.168.20.10');
});
