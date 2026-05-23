import HeroImage from '/assets/iconn.jpeg';

const Image = {
    HeroImage,
};

export default Image;

import Tools1 from '/assets/tools/vscode.png';
import Tools2 from '/assets/tools/reactjs.png';
import Tools3 from '/assets/tools/nextjs.png';
import Tools4 from '/assets/tools/tailwind.png';
import Tools5 from '/assets/tools/bootstrap.png';
import Tools6 from '/assets/tools/js.png';
import Tools7 from '/assets/tools/nodejs.png';
import Tools8 from '/assets/tools/github.png';
import Tools9 from '/assets/tools/ai.png';
import Tools10 from '/assets/tools/canva.png';
import Tools11 from '/assets/tools/figma.png';
import Tools12 from '/assets/tools/iot.jpg';

export const listTools = [{
        id: 1,
        gambar: Tools1,
        nama: 'Visual Studio Code',
        ket: 'Code Editor',
        dad: '100',
    },
    {
        id: 2,
        gambar: Tools2,
        nama: 'React JS',
        ket: 'Framework',
        dad: '200',
    },
    {
        id: 3,
        gambar: Tools3,
        nama: 'Next JS',
        ket: 'Framework',
        dad: '300',
    },
    {
        id: 4,
        gambar: Tools4,
        nama: 'Tailwind CSS',
        ket: 'Framework',
        dad: '400',
    },
    {
        id: 5,
        gambar: Tools5,
        nama: 'Bootstrap',
        ket: 'Framework',
        dad: '500',
    },
    {
        id: 6,
        gambar: Tools6,
        nama: 'Javascript',
        ket: 'Language',
        dad: '600',
    },
    {
        id: 7,
        gambar: Tools7,
        nama: 'Node JS',
        ket: 'Javascript Runtime',
        dad: '700',
    },
    {
        id: 8,
        gambar: Tools8,
        nama: 'Github',
        ket: 'Repository',
        dad: '800',
    },
    {
        id: 9,
        gambar: Tools9,
        nama: 'Adobe Illustrator',
        ket: 'Design App',
        dad: '900',
    },
    {
        id: 10,
        gambar: Tools10,
        nama: 'Canva',
        ket: 'Design App',
        dad: '1000',
    },
    {
        id: 11,
        gambar: Tools11,
        nama: 'Figma',
        ket: 'Design App',
        dad: '1100',
    },
    {
        id: 12,
        gambar: Tools12,
        nama: 'IoT',
        ket: 'Internet of Things',
        dad: '1200',
    },
];

import Proyek1 from '/assets/proyek/proyek1.webp.png';
import Proyek2 from '/assets/proyek/proyek2.webp.png';
import Proyek3 from '/assets/proyek/proyek3.webp.png';
import Proyek4 from '/assets/proyek/6.png';
import Proyek5 from '/assets/proyek/proyek.png';
import Proyek6 from '/assets/proyek/SISTEM.png';

export const listProyek = [{
        id: 1,
        gambar: Proyek1,
        nama: 'IoT-Based Remote Monitoring and Control System for Motorcycle Rentals',
        desk: 'I developed an IoT-based vehicle security system to address limited real-time monitoring and theft prevention in motorcycle rental operations, where manual supervision often causes delayed responses and operational risks. By implementing polygon geofencing, automated alerts, and remote engine immobilization, the system improved security and reduced manual monitoring, achieving a field-validated GPS accuracy of 16.15 meters while helping me overcome real-world challenges such as GPS drift and network instability.',
        tools: ['Independent Final Thesis', 'Published in JATI Journal', 'Implemented with Rental Motor Palembang'],
        dad: '200',
        link: 'https://github.com/achmaddoli/Motorcycle-Rental-Monitoring-System.git',
    },
    {
        id: 2,
        gambar: Proyek2,
        nama: 'A Network QoS Monitor System on IP Networks',
        desk: 'To address the lack of real-time visibility in network performance across multiple subnets, I contributed to a distributed QoS monitoring system using Raspberry Pi and MQTT in a real-world lab environment. The system enabled proactive monitoring and showed that stable bandwidth alone did not always indicate healthy network performance, strengthening my ability to design distributed systems, integrate hardware-software pipelines, and analyze network challenges through data-driven insights.',
        tools: ['Group Project', 'IISMA Academic Project', 'National Formosa University, Taiwan'],
        dad: '300',
        link: 'https://github.com/achmaddoli/A-Network-Quality-of-Service-Monitor-System-on-IP-Networks.git',
    },
    {
        id: 3,
        gambar: Proyek3,
        nama: 'LEAFY – Gamified Leaf Venation Learning App',
        desk: 'I contributed to the development of LEAFY, an interactive mobile learning application designed to improve engagement in elementary science education through real-world leaf exploration and gamification. I focused on analyzing user data and evaluating system effectiveness through testing with 26 students, where learning motivation increased from 38% to 83% (+45%), strengthening my ability to validate human-centered learning solutions using data-driven insights.',
        tools: ['Group Project', 'PKM Artikel Ilmiah (AI)'],
        dad: '400',
        link: 'https://drive.google.com/file/d/1RgqDkHt7q-Fnbba7sAUz6_-IapX89mG1/view?usp=sharing',
    },
    {
        id: 4,
        gambar: Proyek4,
        nama: 'HOMIOKLIN – Cleaning Service Management Platform',
        desk: 'HOMIOKLIN Cleaning Service in Malang faced fragmented service operations, where booking requests, admin coordination, and field reporting were handled through separate manual processes. I built a web-based platform integrating booking management, worker reporting, and automated WhatsApp notifications, strengthening my ability to transform real business workflows into practical digital solutions with improved operational efficiency.',
        tools: ['Individual Project', 'HOMIOKLIN Cleaning Service Business, Malang'],
        dad: '500',
        link: 'https://github.com/achmaddoli/HOMIOKLIN-Cleaning-Service-Management-Platform.git',
    },
    {
        id: 5,
        gambar: Proyek5,
        nama: 'Landing Page of HMTI POLINEMA',
        desk: 'I developed the HMTI POLINEMA Website, a web-based platform that serves as both a public information website and an admin management system for the Information Technology Student Association at Politeknik Negeri Malang. The platform helps manage organizational content efficiently while strengthening HMTI’s digital presence and communication.',
        tools: ['Individual Project', 'Organization Website'],
        dad: '600',
        link: 'https://github.com/achmaddoli/Landing-Page-of-HMTI.git',
    },
    {
        id: 6,
        gambar: Proyek6,
        nama: 'Smart Chicken System for Sustainable Poultry Farming',
        desk: 'I contributed to the design of a Smart Chicken System that integrated feeding, environmental monitoring, water management, and maintenance into a single IoT-based workflow using ESP32-connected subsystems and automated monitoring concepts. This experience strengthened my interest in developing sustainable and scalable integrated systems that address practical community needs through effective real-world automation.',
        tools: ['Group Project', 'FINCAPES-Funded Research Initiative', 'Planned Field Implementation in Sumenep, Indonesia'],
        dad: '700',
        link: 'https://drive.google.com/file/d/1MgSiI8yqGqrZvEVV0PQPuTKsfo2pZpyy/view?usp=sharing',
    },
];
