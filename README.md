# EduCentre Management System

> A comprehensive, multi-role course centre management platform purpose-built for the Indonesian Bimbingan Belajar (Bimbel) market.

![Status](https://img.shields.io/badge/Status-In%20Development-blue)
![Version](https://img.shields.io/badge/Version-1.0.0--demo-orange)
![License](https://img.shields.io/badge/License-Private-red)

---

## 📋 Overview

EduCentre eliminates the need for spreadsheets, WhatsApp groups, and paper-based records by consolidating every course centre operation into a single integrated platform. From student enrollment to fee collection, attendance tracking to payroll — everything runs in one place.

**Target Market:** Indonesian course centres (Bimbingan Belajar / Bimbel)

**User Roles:** Management · Educator · Student · Parent

---

## ✨ Features

- **13 Core Modules** covering every aspect of centre operations
- **135 Documented Features** with role-based access control
- **4 User Roles** each with dedicated dashboards and permission sets
- **Indonesia-First** — Midtrans & Xendit payment integration, WhatsApp Business API notifications
- **Multi-Branch Support** — manage multiple locations under one account

### Module Overview

| # | Module | Description |
|---|---|---|
| 1 | 📊 Dashboard & Overview | Role-specific dashboards with real-time KPIs |
| 2 | 🎓 Student Management | Full student lifecycle, parent linking, document storage |
| 3 | 👩‍🏫 Educator Management | Staff profiles, subject assignment, class load management |
| 4 | 📅 Class & Schedule Management | Visual timetable, conflict detection, recurring sessions |
| 5 | 📝 Enrollment & Registration | 4-step wizard, waitlist management, capacity enforcement |
| 6 | 💰 Fee, Billing & Payment | Auto-invoicing, online payment gateway, PDF receipts |
| 7 | ✅ Attendance Management | Per-session marking, parent alerts, makeup class booking |
| 8 | 📈 Results & Assessment | Grade entry, auto-calculation, report card generation |
| 9 | 🔔 Communication & Notifications | WhatsApp blast, email, in-app announcements |
| 10 | 📊 Reports & Analytics | Revenue, enrollment, attendance, and performance reports |
| 11 | 📚 Learning Materials & Resources | File upload, homework posting, student submissions |
| 12 | 💼 HR & Payroll | Salary structures, payroll cycles, leave management |
| 13 | ⚙️ Settings & Configuration | Centre profile, permissions, integrations, audit log |

---

## 🖥️ Live Demo

> **[View Interactive Demo →](https://educentre-demo.vercel.app)**

The demo includes fully interactive wireframes for all 4 user roles. Use the role switcher at the top to navigate between Management, Educator, Student, and Parent views.

**Demo Screens Available:**
- Admin Dashboard
- Student Management & Profile
- Class Schedule (Weekly Timetable)
- Enrollment Wizard (4-step)
- Fee & Payments
- Educator Management
- Reports & Analytics
- Attendance Marking
- Grade Entry
- Student Dashboard
- Parent Dashboard

---

## 🗂️ Project Documents

| Document | Description |
|---|---|
| [Product Requirements Document (PRD)](./docs/EduCentre_PRD_v1.0.docx) | Full feature specs, tech stack, NFRs, build order |
| [Business Requirements Document (BRD)](./docs/EduCentre_BRD_v1.0.docx) | Business context, stakeholder needs, business rules, KPIs |

---

## 🔧 Recommended Tech Stack

| Layer | Technology | Rationale |
|---|---|---|
| **Frontend** | Next.js 14+ | SSR, built-in routing, Vercel-optimised |
| **UI Library** | Tailwind CSS + shadcn/ui | Utility-first, accessible components |
| **Backend** | Node.js + Express | JavaScript full-stack, large ecosystem |
| **Database** | PostgreSQL 15+ | ACID compliance, JSONB, Row-Level Security |
| **Auth** | NextAuth.js / Clerk | Native Next.js integration, built-in 2FA |
| **Payment (ID)** | Midtrans + Xendit | QRIS, GoPay, OVO, bank transfer support |
| **Notifications** | WhatsApp Business Cloud API | Primary channel for Indonesian market |
| **File Storage** | AWS S3 | Scalable private file storage |
| **PDF Generation** | Puppeteer | Invoices, report cards, payslips |
| **Background Jobs** | BullMQ + Redis | Invoice generation, scheduled reports |
| **Deployment** | Vercel + Railway | Zero-config deployment |
| **Monitoring** | Sentry + Posthog | Error tracking, product analytics |

---

## 🗄️ Database Architecture

**37 PostgreSQL tables** across 9 operational domains:

```
Core          → centres, users, academic_terms, rooms
People        → students, parents, student_parents, educators, educator_subjects
Academics     → classes, class_sessions, enrollments, waitlist, attendance,
                excuse_submissions, makeup_sessions, makeup_bookings
Assessment    → assessments, grades, report_cards
Finance       → fee_structures, discounts, invoices, invoice_items, payments
HR & Payroll  → salary_structures, payroll_cycles, payroll_entries,
                leave_requests, leave_balances
Comms         → announcements, messages, notification_logs, notification_templates
Materials     → materials, homework, homework_submissions
System        → audit_logs
```

---

## 🚀 Development Roadmap

| Phase | Module | Est. Duration |
|---|---|---|
| **1** | Authentication & User Management | 2–3 weeks |
| **2** | Student & Educator Management | 2–3 weeks |
| **3** | Class Scheduling | 3–4 weeks |
| **4** | Enrollment | 2 weeks |
| **5** | Fee, Billing & Payment | 3–4 weeks |
| **6** | Attendance Management | 2–3 weeks |
| **7** | Results & Assessment | 2–3 weeks |
| **8** | Communication Hub | 2 weeks |
| **9** | Learning Materials | 2 weeks |
| **10** | HR & Payroll | 2–3 weeks |
| **11** | Reports & Analytics | 2–3 weeks |
| **12** | Settings & Configuration | 1–2 weeks |

**Total Estimated Timeline:** 26–38 weeks (6.5–9.5 months) for a team of 2–3 developers.

---

## 👥 User Roles

### [M] Management / Admin
Full system access. Manages students, educators, scheduling, billing, payroll, and reporting.

### [E] Educator / Teacher
Class-scoped access. Marks attendance, enters grades, uploads materials, views own schedule and payslips.

### [S] Student
Read-focused portal. Views schedule, results, materials, fees. Pays online and books makeup classes.

### [P] Parent / Guardian
Monitoring portal. Tracks child's attendance, grades, and fees. Pays invoices and messages educators directly.

---

## 🇮🇩 Indonesia-Specific Integrations

- **Payment:** Midtrans (primary) + Xendit (secondary) — QRIS, GoPay, OVO, ShopeePay, bank transfer
- **Notifications:** WhatsApp Business Cloud API (Meta) — primary communication channel
- **Currency:** IDR (Indonesian Rupiah) — supports values up to Rp 999,999,999
- **Timezone:** Asia/Jakarta (WIB, UTC+7) default — WITA and WIT supported
- **Language:** Bahasa Indonesia (primary), English (secondary)

---

## 📊 Planning Deliverables Completed

| Deliverable | Status |
|---|---|
| App Blueprint (10 modules, tech stack, prep checklist) | ✅ Complete |
| Feature List (135 features, role-based access tags) | ✅ Complete |
| Wireframe Explorer (13 screens, 4 roles, interactive) | ✅ Complete |
| User Flow Documentation (26 flows, decision branches) | ✅ Complete |
| Database Schema (37 tables, SQL DDL export) | ✅ Complete |
| Product Requirements Document (PRD v1.0) | ✅ Complete |
| Business Requirements Document (BRD v1.0) | ✅ Complete |

---

## ⚡ Pre-Development Checklist

- [ ] Confirm technology stack (Next.js + Node.js + PostgreSQL recommended)
- [ ] Set up GitHub repository with monorepo structure
- [ ] Register WhatsApp Business Account via Meta Business Manager
- [ ] Create Midtrans and Xendit merchant accounts (obtain sandbox API keys)
- [ ] Provision PostgreSQL database and Redis instance (Railway)
- [ ] Configure AWS S3 buckets with IAM access policies
- [ ] Set up Sentry project for error monitoring
- [ ] Define MVP feature cut from 135 features
- [ ] Assign development team roles
- [ ] Begin Phase 1: Authentication & User Management

---

## 📬 Contact

For inquiries about this project, please reach out via the repository owner's profile.

---

*EduCentre Management System — Confidential. All rights reserved.*