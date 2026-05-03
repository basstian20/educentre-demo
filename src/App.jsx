import { useState, createContext, useContext } from "react";

// ─── Colour tokens ────────────────────────────────────────────────────────────
const C = {
  bg: "#f0f2f5", card: "#ffffff", sidebar: "#12202e", sidebarActive: "#1d4ed8",
  border: "#e2e8f0", text: "#0f172a", muted: "#64748b", hint: "#94a3b8",
  ph: "#dde3ea", blue: "#3b82f6", green: "#16a34a", amber: "#d97706",
  red: "#dc2626", purple: "#7c3aed", teal: "#0891b2",
};

// ─── Language Context ─────────────────────────────────────────────────────────
const LangContext = createContext("en");
const useLang = () => useContext(LangContext);
const useT = () => TRANSLATIONS[useContext(LangContext)];

// ─── Translations ─────────────────────────────────────────────────────────────
const TRANSLATIONS = {
  en: {
    appName: "EduCentre", appSubtitle: "Management System",
    viewingAs: "Viewing as:", wireframeExplorer: "Wireframe Explorer", screens: "screens",
    management: "Management", educator: "Educator", student: "Student", parent: "Parent",
    // Nav sections
    overview: "Overview", people: "People", academics: "Academics",
    finance: "Finance", system: "System", classes: "Classes",
    home: "Home", myChild: "My Child", communicate: "Communicate", admin: "Admin",
    // Nav items
    dashboard: "Dashboard", reportsAnalytics: "Reports & Analytics",
    studentManagement: "Student Management", educatorManagement: "Educator Management",
    classSchedule: "Class Schedule", enrollment: "Enrollment",
    attendanceOverview: "Attendance Overview", resultsGrades: "Results & Grades",
    feePayments: "Fee & Payments", invoices: "Invoices", payroll: "Payroll",
    communication: "Communication", settings: "Settings",
    myDashboard: "My Dashboard", myClasses: "My Classes",
    markAttendance: "Mark Attendance", enterGrades: "Enter Grades",
    uploadMaterials: "Upload Materials", leaveRequest: "Leave Request",
    myPayslips: "My Payslips", mySchedule: "My Schedule", myResults: "My Results",
    learningMaterials: "Learning Materials", myFeesPayments: "My Fees & Payments",
    attendanceRecord: "Attendance Record", messages: "Messages",
    progressGrades: "Progress & Grades", attendance: "Attendance",
    feesPayments: "Fees & Payments", announcements: "Announcements",
    // Buttons
    addStudent: "+ Add Student", importCSV: "Import CSV", addClass: "+ Add Class",
    viewAll: "View all", view: "View", edit: "Edit", save: "Save", cancel: "Cancel",
    back: "← Back", next: "Next →", export: "Export", apply: "Apply",
    payNow: "Pay Now", receipt: "Receipt", remind: "Remind →",
    saveDraft: "Save Draft", submitAttendance: "Submit Attendance",
    saveAll: "Save All", importScores: "Import Scores (Excel)",
    exportPDF: "Export PDF", exportExcel: "Export Excel",
    addEducator: "+ Add Educator", newAssessment: "+ New Assessment",
    sendAllReminders: "Send all reminders", newInvoice: "+ New Invoice",
    // Dashboard stats
    activeStudents: "Active Students", revenueOct: "Revenue (Oct)",
    activeClasses: "Active Classes", outstandingFees: "Outstanding Fees",
    monthlyRevenue: "Monthly Revenue (2024)", todaysClasses: "Today's Classes",
    recentEnrollments: "Recent Enrollments", overduePayments: "Overdue Payments",
    thisMonth: "this month", roomsToday: "rooms today", invoicesOverdue: "invoices overdue",
    // Student Management
    totalStudents: "Total Students", active: "Active", ofTotal: "of total",
    enrolledThisMonth: "Enrolled This Month", pendingApproval: "Pending Approval",
    searchStudent: "🔍  Search student name, ID, or phone...",
    allClasses: "All Classes", allStatus: "All Status",
    showing: "Showing", of: "of", students: "students",
    // Table headers
    studentCol: "Student", studentId: "Student ID", classCol: "Class",
    enrolled: "Enrolled", feeStatus: "Fee Status", status: "Status",
    subjects: "Subjects", classesPerWeek: "Classes/Week", type: "Type",
    invoiceCol: "Invoice", description: "Description", amount: "Amount",
    dueDate: "Due Date", assessment: "Assessment", score: "Score /100",
    grade: "Grade", remark: "Remark", date: "Date", note: "Note",
    // Profile
    dateOfBirth: "Date of Birth", age: "Age", icNumber: "IC Number",
    gender: "Gender", phone: "Phone", email: "Email",
    parentGuardian: "Parent / Guardian", quickActions: "Quick Actions",
    sendMessage: "📩  Send Message", createInvoice: "🧾  Create Invoice",
    generateReportCard: "📋  Generate Report Card", suspendStudent: "⛔  Suspend Student",
    // Tabs
    enrollmentTab: "Enrollment", attendanceTab: "Attendance", resultsTab: "Results",
    feesTab: "Fees", documentsTab: "Documents",
    // Attendance stats
    overallAttendance: "Overall Attendance", sessionsAttended: "Sessions Attended",
    absences: "Absences", late: "Late",
    // Status labels
    statusActive: "Active", statusInactive: "Inactive", statusPaid: "Paid",
    statusUnpaid: "Unpaid", statusOverdue: "Overdue", statusPartial: "Partial",
    statusPending: "Pending", statusPresent: "Present", statusAbsent: "Absent",
    statusLate: "Late", statusExcused: "Excused", statusCompleted: "Completed",
    statusConfirmed: "Confirmed", statusFull: "Full",
    // Fee
    totalPaid: "Total Paid (2024)", outstanding: "Outstanding",
    // Schedule
    week: "Week", day: "Day", month: "Month", newClass: "+ New Class",
    allEducators: "All Educators", allRooms: "All Rooms",
    // Enrollment steps
    studentInfo: "Student Info", selectCourses: "Select Courses",
    feePlan: "Fee Plan", confirmStep: "Confirm",
    fullName: "Full Name (as per IC)", icPassport: "IC / Passport Number",
    dob: "Date of Birth", genderLabel: "Gender", school: "School",
    schoolYear: "School Year/Level", homeAddress: "Home Address",
    fullAddress: "Full address", parentGuardianSection: "Parent / Guardian",
    parentName: "Parent / Guardian Name", relationship: "Relationship",
    phoneNumber: "Phone Number", emailAddress: "Email Address",
    availableCourses: "Available Courses", searchCourses: "🔍  Search courses...",
    spotsLeft: "spots left", enrollInCourse: "Enroll in this course",
    feeDiscounts: "Fee Plan & Discounts", selectedCourses: "Selected Courses",
    totalPerMonth: "Total per month", discountPromo: "Discount / Promo Code",
    enterPromoCode: "Enter promo code", registrationFee: "Registration Fee",
    paymentStartDate: "Payment Start Date", billingCycle: "Billing Cycle",
    enrollmentProgress: "Enrollment Progress", completingStep: "Completing step",
    tips: "Tips", confirmEnrollment: "✅ Confirm Enrollment",
    readyToConfirm: "✅ Ready to confirm",
    // Grades
    maxScore: "Max Score:", passMark: "Pass Mark:",
    // Parent Dashboard
    attendanceRate: "Attendance Rate", averageGrade: "Average Grade",
    upcomingClasses: "Upcoming Classes", todaySchedule: "Today's Schedule",
    latestResults: "Latest Results", attendanceThisMonth: "Attendance This Month",
    feeStatement: "Fee Statement", totalOutstanding: "Total Outstanding:",
    messageEducator: "📩  Message Educator", payFees: "💰  Pay Fees",
    // Student Dashboard
    myAttendance: "My Attendance", classesToday: "Classes Today",
    recentGrades: "Recent Grades", myFees: "My Fees", dueFees: "due on",
    // Reports
    revenue: "Revenue Report", outstandingFeesReport: "Outstanding Fees",
    enrollmentTrends: "Enrollment Trends", classUtilisation: "Class Utilisation",
    educatorWorkload: "Educator Workload", studentRetention: "Student Retention",
    attendanceSummary: "Attendance Summary", academicPerformance: "Academic Performance",
    plSummary: "P&L Summary", totalCollectedYTD: "Total Collected YTD",
    bestMonth: "Best Month (Oct)", currentlyOutstanding: "Currently Outstanding",
    collectionRate: "Collection Rate", revenueByCourse: "Revenue by Course",
    paymentMethodBreakdown: "Payment Method Breakdown",
    // Educator
    myClassesCount: "My Classes", totalStudentsCount: "Total Students",
    gradesPending: "Grades Pending", myClassesToday: "My Classes Today",
    pendingTasks: "Pending Tasks",
    // Educator Mgmt
    totalEducators: "Total Educators", fullTime: "Full-Time",
    partTimeFreelance: "Part-Time / Freelance", onLeaveToday: "On Leave Today",
    searchEducator: "🔍  Search educator name or subject...",
    allSubjects: "All Subjects",
    // Misc
    adminUser: "Admin User", years: "years", father: "Father",
    screenComingSoon: "Screen coming soon",
    clickSidebar: "Click any item in the sidebar to view its wireframe.",
    tip1: "Ensure student IC number is correct — it cannot be changed after confirmation.",
    tip2: "Students can be enrolled in multiple courses simultaneously.",
    tip3: "A welcome message will be auto-sent to the parent via WhatsApp after confirmation.",
    daysOverdue: "days overdue",
    monthlyRevByCourse: "Monthly revenue collected vs outstanding fees",
    selectDateRange: "Jan–Oct 2024",
    onLeave: "On Leave",
  },
  id: {
    appName: "EduCentre", appSubtitle: "Sistem Manajemen",
    viewingAs: "Melihat sebagai:", wireframeExplorer: "Penjelajah Wireframe", screens: "layar",
    management: "Manajemen", educator: "Pengajar", student: "Siswa", parent: "Orang Tua",
    // Nav sections
    overview: "Ikhtisar", people: "Orang", academics: "Akademik",
    finance: "Keuangan", system: "Sistem", classes: "Kelas",
    home: "Beranda", myChild: "Anak Saya", communicate: "Komunikasi", admin: "Admin",
    // Nav items
    dashboard: "Dasbor", reportsAnalytics: "Laporan & Analitik",
    studentManagement: "Manajemen Siswa", educatorManagement: "Manajemen Pengajar",
    classSchedule: "Jadwal Kelas", enrollment: "Pendaftaran",
    attendanceOverview: "Ikhtisar Kehadiran", resultsGrades: "Hasil & Nilai",
    feePayments: "Biaya & Pembayaran", invoices: "Tagihan", payroll: "Penggajian",
    communication: "Komunikasi", settings: "Pengaturan",
    myDashboard: "Dasbor Saya", myClasses: "Kelas Saya",
    markAttendance: "Catat Kehadiran", enterGrades: "Masukkan Nilai",
    uploadMaterials: "Unggah Materi", leaveRequest: "Permohonan Cuti",
    myPayslips: "Slip Gaji Saya", mySchedule: "Jadwal Saya", myResults: "Hasil Saya",
    learningMaterials: "Materi Belajar", myFeesPayments: "Biaya & Pembayaran Saya",
    attendanceRecord: "Rekam Kehadiran", messages: "Pesan",
    progressGrades: "Kemajuan & Nilai", attendance: "Kehadiran",
    feesPayments: "Biaya & Pembayaran", announcements: "Pengumuman",
    // Buttons
    addStudent: "+ Tambah Siswa", importCSV: "Impor CSV", addClass: "+ Tambah Kelas",
    viewAll: "Lihat semua", view: "Lihat", edit: "Ubah", save: "Simpan", cancel: "Batal",
    back: "← Kembali", next: "Berikutnya →", export: "Ekspor", apply: "Terapkan",
    payNow: "Bayar Sekarang", receipt: "Kwitansi", remind: "Ingatkan →",
    saveDraft: "Simpan Draf", submitAttendance: "Kirim Kehadiran",
    saveAll: "Simpan Semua", importScores: "Impor Nilai (Excel)",
    exportPDF: "Ekspor PDF", exportExcel: "Ekspor Excel",
    addEducator: "+ Tambah Pengajar", newAssessment: "+ Penilaian Baru",
    sendAllReminders: "Kirim semua pengingat", newInvoice: "+ Tagihan Baru",
    // Dashboard stats
    activeStudents: "Siswa Aktif", revenueOct: "Pendapatan (Okt)",
    activeClasses: "Kelas Aktif", outstandingFees: "Tagihan Belum Bayar",
    monthlyRevenue: "Pendapatan Bulanan (2024)", todaysClasses: "Kelas Hari Ini",
    recentEnrollments: "Pendaftaran Terbaru", overduePayments: "Pembayaran Terlambat",
    thisMonth: "bulan ini", roomsToday: "ruangan hari ini", invoicesOverdue: "tagihan terlambat",
    // Student Management
    totalStudents: "Total Siswa", active: "Aktif", ofTotal: "dari total",
    enrolledThisMonth: "Didaftarkan Bulan Ini", pendingApproval: "Menunggu Persetujuan",
    searchStudent: "🔍  Cari nama siswa, ID, atau nomor telepon...",
    allClasses: "Semua Kelas", allStatus: "Semua Status",
    showing: "Menampilkan", of: "dari", students: "siswa",
    // Table headers
    studentCol: "Siswa", studentId: "ID Siswa", classCol: "Kelas",
    enrolled: "Terdaftar", feeStatus: "Status Biaya", status: "Status",
    subjects: "Mata Pelajaran", classesPerWeek: "Kelas/Minggu", type: "Tipe",
    invoiceCol: "Tagihan", description: "Keterangan", amount: "Jumlah",
    dueDate: "Jatuh Tempo", assessment: "Penilaian", score: "Nilai /100",
    grade: "Peringkat", remark: "Catatan", date: "Tanggal", note: "Catatan",
    // Profile
    dateOfBirth: "Tanggal Lahir", age: "Usia", icNumber: "No. KTP/Paspor",
    gender: "Jenis Kelamin", phone: "Telepon", email: "Email",
    parentGuardian: "Orang Tua / Wali", quickActions: "Tindakan Cepat",
    sendMessage: "📩  Kirim Pesan", createInvoice: "🧾  Buat Tagihan",
    generateReportCard: "📋  Buat Rapor", suspendStudent: "⛔  Tangguhkan Siswa",
    // Tabs
    enrollmentTab: "Pendaftaran", attendanceTab: "Kehadiran", resultsTab: "Hasil",
    feesTab: "Biaya", documentsTab: "Dokumen",
    // Attendance stats
    overallAttendance: "Kehadiran Keseluruhan", sessionsAttended: "Sesi Dihadiri",
    absences: "Ketidakhadiran", late: "Terlambat",
    // Status labels
    statusActive: "Aktif", statusInactive: "Tidak Aktif", statusPaid: "Lunas",
    statusUnpaid: "Belum Bayar", statusOverdue: "Terlambat", statusPartial: "Sebagian",
    statusPending: "Menunggu", statusPresent: "Hadir", statusAbsent: "Tidak Hadir",
    statusLate: "Terlambat", statusExcused: "Diizinkan", statusCompleted: "Selesai",
    statusConfirmed: "Dikonfirmasi", statusFull: "Penuh",
    // Fee
    totalPaid: "Total Dibayar (2024)", outstanding: "Belum Dibayar",
    // Schedule
    week: "Minggu", day: "Hari", month: "Bulan", newClass: "+ Kelas Baru",
    allEducators: "Semua Pengajar", allRooms: "Semua Ruangan",
    // Enrollment steps
    studentInfo: "Info Siswa", selectCourses: "Pilih Kursus",
    feePlan: "Rencana Biaya", confirmStep: "Konfirmasi",
    fullName: "Nama Lengkap (sesuai KTP)", icPassport: "Nomor KTP / Paspor",
    dob: "Tanggal Lahir", genderLabel: "Jenis Kelamin", school: "Sekolah",
    schoolYear: "Tahun/Tingkat Sekolah", homeAddress: "Alamat Rumah",
    fullAddress: "Alamat lengkap", parentGuardianSection: "Orang Tua / Wali",
    parentName: "Nama Orang Tua / Wali", relationship: "Hubungan",
    phoneNumber: "Nomor Telepon", emailAddress: "Alamat Email",
    availableCourses: "Kursus Tersedia", searchCourses: "🔍  Cari kursus...",
    spotsLeft: "tempat tersisa", enrollInCourse: "Daftarkan ke kursus ini",
    feeDiscounts: "Rencana Biaya & Diskon", selectedCourses: "Kursus Dipilih",
    totalPerMonth: "Total per bulan", discountPromo: "Diskon / Kode Promo",
    enterPromoCode: "Masukkan kode promo", registrationFee: "Biaya Pendaftaran",
    paymentStartDate: "Tanggal Mulai Pembayaran", billingCycle: "Siklus Penagihan",
    enrollmentProgress: "Kemajuan Pendaftaran", completingStep: "Menyelesaikan langkah",
    tips: "Tips", confirmEnrollment: "✅ Konfirmasi Pendaftaran",
    readyToConfirm: "✅ Siap dikonfirmasi",
    // Grades
    maxScore: "Nilai Maksimal:", passMark: "Nilai Lulus:",
    // Parent Dashboard
    attendanceRate: "Tingkat Kehadiran", averageGrade: "Nilai Rata-rata",
    upcomingClasses: "Kelas Mendatang", todaySchedule: "Jadwal Hari Ini",
    latestResults: "Hasil Terbaru", attendanceThisMonth: "Kehadiran Bulan Ini",
    feeStatement: "Laporan Biaya", totalOutstanding: "Total Belum Dibayar:",
    messageEducator: "📩  Pesan Pengajar", payFees: "💰  Bayar Biaya",
    // Student Dashboard
    myAttendance: "Kehadiran Saya", classesToday: "Kelas Hari Ini",
    recentGrades: "Nilai Terbaru", myFees: "Biaya Saya", dueFees: "jatuh tempo",
    // Reports
    revenue: "Laporan Pendapatan", outstandingFeesReport: "Tagihan Belum Bayar",
    enrollmentTrends: "Tren Pendaftaran", classUtilisation: "Penggunaan Kelas",
    educatorWorkload: "Beban Pengajar", studentRetention: "Retensi Siswa",
    attendanceSummary: "Ringkasan Kehadiran", academicPerformance: "Performa Akademik",
    plSummary: "Ringkasan P&L", totalCollectedYTD: "Total Terkumpul Tahun Ini",
    bestMonth: "Bulan Terbaik (Okt)", currentlyOutstanding: "Saat Ini Belum Dibayar",
    collectionRate: "Tingkat Pengumpulan", revenueByCourse: "Pendapatan per Kursus",
    paymentMethodBreakdown: "Rincian Metode Pembayaran",
    // Educator
    myClassesCount: "Kelas Saya", totalStudentsCount: "Total Siswa",
    gradesPending: "Nilai Menunggu", myClassesToday: "Kelas Saya Hari Ini",
    pendingTasks: "Tugas Menunggu",
    // Educator Mgmt
    totalEducators: "Total Pengajar", fullTime: "Penuh Waktu",
    partTimeFreelance: "Paruh Waktu / Lepas", onLeaveToday: "Cuti Hari Ini",
    searchEducator: "🔍  Cari nama pengajar atau mata pelajaran...",
    allSubjects: "Semua Mata Pelajaran",
    // Misc
    adminUser: "Pengguna Admin", years: "tahun", father: "Ayah",
    screenComingSoon: "Layar segera hadir",
    clickSidebar: "Klik item di bilah samping untuk melihat wireframe-nya.",
    tip1: "Pastikan nomor KTP siswa benar — tidak dapat diubah setelah konfirmasi.",
    tip2: "Siswa dapat didaftarkan di beberapa kursus sekaligus.",
    tip3: "Pesan selamat datang akan otomatis dikirim ke orang tua via WhatsApp setelah konfirmasi.",
    daysOverdue: "hari terlambat",
    monthlyRevByCourse: "Pendapatan bulanan terkumpul vs tagihan belum bayar",
    selectDateRange: "Jan–Okt 2024",
    onLeave: "Cuti",
  },
};

// ─── UI Primitives ────────────────────────────────────────────────────────────
const Avatar = ({ name, size = 28, color = C.blue }) => (
  <div style={{ width: size, height: size, borderRadius: "50%", background: color + "22", display: "flex", alignItems: "center", justifyContent: "center", fontSize: size * 0.38, fontWeight: 700, color, flexShrink: 0 }}>
    {name?.split(" ").map(w => w[0]).slice(0, 2).join("")}
  </div>
);

const Badge = ({ text, color = "blue" }) => {
  const m = { blue: [C.blue + "18", C.blue], green: ["#dcfce7", C.green], red: ["#fee2e2", C.red], amber: ["#fef3c7", C.amber], purple: [C.purple + "18", C.purple], gray: ["#f1f5f9", C.muted], teal: [C.teal + "18", C.teal] };
  const [bg, fg] = m[color] || m.blue;
  return <span style={{ fontSize: 10, fontWeight: 600, padding: "2px 8px", borderRadius: 20, background: bg, color: fg, whiteSpace: "nowrap" }}>{text}</span>;
};

const Btn = ({ label, primary, sm, danger, outline, onClick, style = {} }) => (
  <button onClick={onClick} style={{ padding: sm ? "5px 10px" : "8px 16px", fontSize: sm ? 11 : 12, fontWeight: 600, borderRadius: 7, cursor: "pointer", border: outline ? `1px solid ${C.border}` : "none", background: danger ? C.red : primary ? C.blue : outline ? "transparent" : "#f1f5f9", color: (primary || danger) ? "#fff" : C.text, ...style }}>
    {label}
  </button>
);

const Input = ({ placeholder, style = {} }) => (
  <input readOnly placeholder={placeholder} style={{ padding: "7px 10px", fontSize: 12, border: `0.5px solid ${C.border}`, borderRadius: 7, background: "#fff", color: C.text, outline: "none", width: "100%", boxSizing: "border-box", ...style }} />
);

const Select = ({ label }) => (
  <div style={{ padding: "7px 10px", fontSize: 12, border: `0.5px solid ${C.border}`, borderRadius: 7, background: "#fff", color: C.muted, display: "flex", justifyContent: "space-between", alignItems: "center", whiteSpace: "nowrap" }}>
    <span>{label}</span><span style={{ color: C.hint, marginLeft: 6 }}>▾</span>
  </div>
);

const Label = ({ text }) => <div style={{ fontSize: 11, fontWeight: 600, color: C.muted, marginBottom: 4 }}>{text}</div>;

const Card = ({ children, style = {}, p = 16 }) => (
  <div style={{ background: C.card, border: `0.5px solid ${C.border}`, borderRadius: 10, padding: p, ...style }}>{children}</div>
);

const CardTitle = ({ text, action }) => (
  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
    <span style={{ fontSize: 13, fontWeight: 700, color: C.text }}>{text}</span>
    {action && <button style={{ fontSize: 11, color: C.blue, background: "none", border: "none", cursor: "pointer" }}>{action}</button>}
  </div>
);

const Stat = ({ value, label, sub, color, icon }) => (
  <Card style={{ flex: 1 }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
      <div>
        <div style={{ fontSize: 11, color: C.muted, marginBottom: 4 }}>{label}</div>
        <div style={{ fontSize: 22, fontWeight: 800, color: color || C.text, letterSpacing: -0.5 }}>{value}</div>
        {sub && <div style={{ fontSize: 11, color: C.green, marginTop: 3 }}>{sub}</div>}
      </div>
      {icon && <div style={{ width: 34, height: 34, borderRadius: 8, background: (color || C.blue) + "18", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>{icon}</div>}
    </div>
  </Card>
);

const MiniBar = ({ values, h = 70 }) => {
  const max = Math.max(...values, 1);
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 4, height: h }}>
      {values.map((v, i) => <div key={i} style={{ flex: 1, height: `${(v / max) * 100}%`, background: C.blue + (i === values.length - 1 ? "ff" : "55"), borderRadius: "3px 3px 0 0" }} />)}
    </div>
  );
};

const Divider = () => <div style={{ height: "0.5px", background: C.border, margin: "12px 0" }} />;

const TableHead = ({ cols }) => (
  <div style={{ display: "grid", gridTemplateColumns: cols.map(c => c.w || "1fr").join(" "), padding: "8px 12px", background: "#f8fafc", borderBottom: `0.5px solid ${C.border}` }}>
    {cols.map((c, i) => <div key={i} style={{ fontSize: 10, fontWeight: 700, color: C.hint, textTransform: "uppercase", letterSpacing: 0.5 }}>{c.label}</div>)}
  </div>
);

const TableRow = ({ cols, values, last }) => (
  <div style={{ display: "grid", gridTemplateColumns: cols.map(c => c.w || "1fr").join(" "), padding: "9px 12px", borderBottom: last ? "none" : `0.5px solid ${C.border}`, alignItems: "center" }}>
    {values.map((v, i) => <div key={i} style={{ fontSize: 12, color: C.text }}>{v}</div>)}
  </div>
);

// ─── Language Switcher ─────────────────────────────────────────────────────────
const LangSwitcher = ({ lang, setLang }) => (
  <div style={{ display: "flex", background: "#f1f5f9", borderRadius: 8, padding: 2, gap: 2, border: `1px solid ${C.border}` }}>
    {["en", "id"].map(l => (
      <button
        key={l}
        onClick={() => setLang(l)}
        style={{
          padding: "4px 10px", fontSize: 11, fontWeight: 700, borderRadius: 6, border: "none",
          cursor: "pointer", letterSpacing: 0.5, textTransform: "uppercase",
          background: lang === l ? C.blue : "transparent",
          color: lang === l ? "#fff" : C.muted,
          transition: "all .15s",
        }}
      >
        {l === "en" ? "🇬🇧 EN" : "🇮🇩 ID"}
      </button>
    ))}
  </div>
);

// ─── Sidebar ──────────────────────────────────────────────────────────────────
function getNav(t) {
  return {
    Management: [
      { section: t.overview, items: [t.dashboard, t.reportsAnalytics] },
      { section: t.people, items: [t.studentManagement, t.educatorManagement] },
      { section: t.academics, items: [t.classSchedule, t.enrollment, t.attendanceOverview, t.resultsGrades] },
      { section: t.finance, items: [t.feePayments, t.invoices, t.payroll] },
      { section: t.system, items: [t.communication, t.settings] },
    ],
    Educator: [
      { section: t.overview, items: [t.myDashboard] },
      { section: t.classes, items: [t.myClasses, t.classSchedule] },
      { section: "Students", items: [t.markAttendance, t.enterGrades, t.uploadMaterials] },
      { section: t.admin, items: [t.leaveRequest, t.myPayslips] },
    ],
    Student: [
      { section: t.home, items: [t.dashboard] },
      { section: t.academics, items: [t.mySchedule, t.myResults, t.learningMaterials] },
      { section: t.finance, items: [t.myFeesPayments] },
      { section: "Other", items: [t.attendanceRecord, t.messages] },
    ],
    Parent: [
      { section: t.home, items: [t.overview] },
      { section: t.myChild, items: [t.progressGrades, t.attendance, t.classSchedule] },
      { section: t.finance, items: [t.feesPayments] },
      { section: t.communicate, items: [t.messages, t.announcements] },
    ],
  };
}

function Sidebar({ role, active, onNav }) {
  const t = useT();
  const NAV = getNav(t);
  const navItems = NAV[role] || [];
  const roleKey = { Management: "management", Educator: "educator", Student: "student", Parent: "parent" }[role];

  return (
    <div style={{ width: 196, background: C.sidebar, height: "100%", display: "flex", flexDirection: "column", flexShrink: 0 }}>
      <div style={{ padding: "16px 14px 12px", borderBottom: "0.5px solid #ffffff14" }}>
        <div style={{ fontSize: 13, fontWeight: 800, color: "#fff", letterSpacing: -0.3 }}>{t.appName}</div>
        <div style={{ fontSize: 10, color: "#ffffff55", marginTop: 2 }}>{t.appSubtitle}</div>
      </div>
      <div style={{ flex: 1, overflowY: "auto", padding: "8px 8px" }}>
        {navItems.map((s, si) => (
          <div key={si} style={{ marginBottom: 6 }}>
            <div style={{ fontSize: 9, fontWeight: 700, color: "#ffffff35", letterSpacing: 1, textTransform: "uppercase", padding: "8px 8px 4px" }}>{s.section}</div>
            {s.items.map((item, ii) => (
              <div key={ii} onClick={() => onNav(item)} style={{ padding: "7px 10px", borderRadius: 7, marginBottom: 1, cursor: "pointer", background: active === item ? C.sidebarActive : "transparent", color: active === item ? "#fff" : "#ffffffaa", fontSize: 12, fontWeight: active === item ? 600 : 400, transition: "all .1s" }}>
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div style={{ padding: "12px 14px", borderTop: "0.5px solid #ffffff14" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 28, height: 28, borderRadius: "50%", background: C.sidebarActive, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: "#fff" }}>A</div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 600, color: "#fff" }}>{t.adminUser}</div>
            <div style={{ fontSize: 10, color: "#ffffff55" }}>{t[roleKey]}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Header({ title, sub, actions }) {
  return (
    <div style={{ padding: "14px 20px", background: C.card, borderBottom: `0.5px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
      <div>
        <div style={{ fontSize: 16, fontWeight: 700, color: C.text }}>{title}</div>
        {sub && <div style={{ fontSize: 11, color: C.muted, marginTop: 1 }}>{sub}</div>}
      </div>
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        {actions}
        <div style={{ width: 32, height: 32, borderRadius: "50%", background: C.ph, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>🔔</div>
      </div>
    </div>
  );
}

// ─── Screen Components ────────────────────────────────────────────────────────

function AdminDashboard() {
  const t = useT();
  return (
    <div style={{ padding: 18, display: "flex", flexDirection: "column", gap: 14 }}>
      <div style={{ display: "flex", gap: 10 }}>
        <Stat value="247" label={t.activeStudents} sub={`↑ 12 ${t.thisMonth}`} color={C.blue} icon="🎓" />
        <Stat value="RM 18,400" label={t.revenueOct} sub="↑ 8% vs Sep" color={C.green} icon="💰" />
        <Stat value="34" label={t.activeClasses} sub={`6 ${t.roomsToday}`} color={C.purple} icon="📅" />
        <Stat value="RM 3,200" label={t.outstandingFees} sub={`11 ${t.invoicesOverdue}`} color={C.red} icon="⚠️" />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 12 }}>
        <Card>
          <CardTitle text={t.monthlyRevenue} />
          <MiniBar values={[8200, 9800, 11200, 10400, 14000, 13200, 15800, 16200, 17100, 18400, 0, 0]} h={90} />
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>
            {["J","F","M","A","M","J","J","A","S","O","N","D"].map(m => <span key={m} style={{ fontSize: 9, color: C.hint }}>{m}</span>)}
          </div>
        </Card>
        <Card>
          <CardTitle text={t.todaysClasses} action={t.viewAll} />
          {[
            ["8:00 AM", "Math Yr 5", "Room A", "18/20"],
            ["9:30 AM", "English Yr 3", "Room B", "12/15"],
            ["11:00 AM", "Science Yr 6", "Lab 1", "20/20"],
            ["2:00 PM", "BM Yr 4", "Room C", "16/18"],
            ["3:30 PM", "Math Yr 6", "Room A", "14/20"],
          ].map(([time, name, room, count], i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 0", borderBottom: i < 4 ? `0.5px solid ${C.border}` : "none" }}>
              <span style={{ fontSize: 10, color: C.hint, width: 52, flexShrink: 0 }}>{time}</span>
              <span style={{ fontSize: 12, flex: 1, fontWeight: 500, color: C.text }}>{name}</span>
              <span style={{ fontSize: 10, color: C.muted }}>{room}</span>
              <Badge text={count} color={count.split("/")[0] === count.split("/")[1] ? "red" : "blue"} />
            </div>
          ))}
        </Card>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <Card>
          <CardTitle text={t.recentEnrollments} action={t.viewAll} />
          {[
            ["Aiman Haziq", "Math Yr 5", "Today", "green"],
            ["Nurul Ain", "English Yr 3", "Yesterday", "green"],
            ["Farhan Izzat", "Science Yr 6", "25 Oct", "amber"],
            ["Siti Hajar", "BM Yr 4", "24 Oct", "amber"],
          ].map(([name, course, date, status], i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "7px 0", borderBottom: i < 3 ? `0.5px solid ${C.border}` : "none" }}>
              <Avatar name={name} size={30} color={C.blue} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: C.text }}>{name}</div>
                <div style={{ fontSize: 11, color: C.muted }}>{course}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 10, color: C.hint, marginBottom: 2 }}>{date}</div>
                <Badge text={status === "green" ? t.statusConfirmed : t.statusPending} color={status} />
              </div>
            </div>
          ))}
        </Card>
        <Card>
          <CardTitle text={t.overduePayments} action={t.sendAllReminders} />
          {[
            ["Ahmad Ridzwan", "RM 280", "14"],
            ["Zulaikha bt Aziz", "RM 560", "21"],
            ["Iqbal Hakim", "RM 140", "7"],
            ["Maisarah Yusof", "RM 420", "30"],
          ].map(([name, amount, days], i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "7px 0", borderBottom: i < 3 ? `0.5px solid ${C.border}` : "none" }}>
              <Avatar name={name} size={30} color={C.red} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: C.text }}>{name}</div>
                <div style={{ fontSize: 11, color: C.red }}>{days} {t.daysOverdue}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: C.red }}>{amount}</div>
                <button style={{ fontSize: 10, color: C.blue, background: "none", border: "none", cursor: "pointer" }}>{t.remind}</button>
              </div>
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
}

function StudentManagement() {
  const t = useT();
  return (
    <div style={{ padding: 18, display: "flex", flexDirection: "column", gap: 14 }}>
      <div style={{ display: "flex", gap: 10 }}>
        <Stat value="247" label={t.totalStudents} color={C.blue} icon="👥" />
        <Stat value="231" label={t.active} sub={`93.5% ${t.ofTotal}`} color={C.green} icon="✅" />
        <Stat value="12" label={t.enrolledThisMonth} color={C.purple} icon="📝" />
        <Stat value="4" label={t.pendingApproval} color={C.amber} icon="⏳" />
      </div>
      <Card p={0}>
        <div style={{ padding: "12px 14px", display: "flex", alignItems: "center", gap: 8, borderBottom: `0.5px solid ${C.border}`, flexWrap: "wrap" }}>
          <Input placeholder={t.searchStudent} style={{ flex: 1, minWidth: 180 }} />
          <Select label={t.allClasses} />
          <Select label={t.allStatus} />
          <Btn label={t.addStudent} primary />
          <Btn label={t.importCSV} outline />
        </div>
        <TableHead cols={[{label:t.studentCol,w:"2fr"},{label:t.studentId,w:"1fr"},{label:t.classCol,w:"1fr"},{label:t.enrolled,w:"1fr"},{label:t.feeStatus,w:"1fr"},{label:t.status,w:"0.7fr"},{label:"",w:"0.6fr"}]} />
        {[
          ["Julina Indrawan","SC-2024-001","Math Yr 5 · English Yr 3","15 Jan 2024","Paid","Active"],
          ["Indra Wiguna","SC-2024-002","BM Yr 4 · Science Yr 4","20 Jan 2024","Paid","Active"],
          ["Nurul Febrina","SC-2024-047","Science Yr 6","3 Feb 2024","Overdue","Active"],
          ["Fajar Rangkuti","SC-2024-089","Math Yr 6 · English Yr 6","10 Mar 2024","Paid","Active"],
          ["Zoelkarnaini","SC-2024-112","BM Yr 5","1 Apr 2024","Pending","Inactive"],
          ["Andri Hantoro","SC-2024-130","Math Yr 3","22 May 2024","Paid","Active"],
        ].map(([name,id,classes,enrolled,fee,status],i,arr)=>(
          <TableRow key={i} last={i===arr.length-1} cols={[{w:"2fr"},{w:"1fr"},{w:"1fr"},{w:"1fr"},{w:"1fr"},{w:"0.7fr"},{w:"0.6fr"}]} values={[
            <div style={{display:"flex",alignItems:"center",gap:8}}><Avatar name={name} size={26}/><span style={{fontWeight:600}}>{name}</span></div>,
            <span style={{color:C.muted,fontFamily:"monospace",fontSize:11}}>{id}</span>,
            <span style={{color:C.muted,fontSize:11}}>{classes}</span>,
            <span style={{color:C.muted,fontSize:11}}>{enrolled}</span>,
            <Badge text={fee==="Paid"?t.statusPaid:fee==="Overdue"?t.statusOverdue:t.statusPending} color={fee==="Paid"?"green":fee==="Overdue"?"red":"amber"}/>,
            <Badge text={status==="Active"?t.statusActive:t.statusInactive} color={status==="Active"?"green":"gray"}/>,
            <div style={{display:"flex",gap:4}}><Btn label={t.view} sm outline/><Btn label={t.edit} sm outline/></div>,
          ]}/>
        ))}
        <div style={{padding:"10px 14px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <span style={{fontSize:11,color:C.muted}}>{t.showing} 1–6 {t.of} 247 {t.students}</span>
          <div style={{display:"flex",gap:4}}>
            {["←","1","2","3","...","42","→"].map((p,i)=>(
              <button key={i} style={{width:28,height:28,borderRadius:6,border:`0.5px solid ${p==="1"?C.blue:C.border}`,background:p==="1"?C.blue:"transparent",color:p==="1"?"#fff":C.muted,fontSize:11,cursor:"pointer"}}>{p}</button>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}

function StudentProfile() {
  const t = useT();
  const [tab, setTab] = useState(t.enrollmentTab);
  const tabs = [t.enrollmentTab, t.attendanceTab, t.resultsTab, t.feesTab, t.documentsTab];

  return (
    <div style={{ padding: 18, display: "flex", gap: 14 }}>
      <div style={{ width: 240, display: "flex", flexDirection: "column", gap: 12 }}>
        <Card>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, paddingBottom: 14, borderBottom: `0.5px solid ${C.border}`, marginBottom: 14 }}>
            <div style={{ width: 70, height: 70, borderRadius: "50%", background: C.blue + "22", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, fontWeight: 800, color: C.blue }}>AH</div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: C.text }}>Aiman Haziq bin Rosli</div>
              <div style={{ fontSize: 11, color: C.muted, marginTop: 1 }}>SC-2024-001</div>
              <Badge text={t.statusActive} color="green" />
            </div>
          </div>
          {[[t.dateOfBirth,"12 March 2012"],[t.age,`12 ${t.years}`],[t.icNumber,"120312-14-XXXX"],[t.gender,"Male"],[t.phone,"012-345 6789"],[t.email,"aiman@email.com"]].map(([k,v])=>(
            <div key={k} style={{display:"flex",justifyContent:"space-between",padding:"5px 0",borderBottom:`0.5px solid ${C.border}`}}>
              <span style={{fontSize:11,color:C.hint}}>{k}</span>
              <span style={{fontSize:11,color:C.text,fontWeight:500}}>{v}</span>
            </div>
          ))}
        </Card>
        <Card>
          <CardTitle text={t.parentGuardian}/>
          <div style={{display:"flex",alignItems:"center",gap:8}}>
            <Avatar name="Rosli Bin Ahmad" size={30} color={C.green}/>
            <div>
              <div style={{fontSize:12,fontWeight:600,color:C.text}}>Rosli bin Ahmad</div>
              <div style={{fontSize:11,color:C.muted}}>{t.father} · 013-456 7890</div>
            </div>
          </div>
        </Card>
        <Card>
          <CardTitle text={t.quickActions}/>
          <div style={{display:"flex",flexDirection:"column",gap:6}}>
            <Btn label={t.sendMessage} outline style={{width:"100%",justifyContent:"flex-start"}}/>
            <Btn label={t.createInvoice} outline style={{width:"100%",justifyContent:"flex-start"}}/>
            <Btn label={t.generateReportCard} outline style={{width:"100%",justifyContent:"flex-start"}}/>
            <Btn label={t.suspendStudent} danger style={{width:"100%",justifyContent:"flex-start"}}/>
          </div>
        </Card>
      </div>
      <div style={{flex:1}}>
        <Card>
          <div style={{display:"flex",gap:4,marginBottom:14,borderBottom:`0.5px solid ${C.border}`,paddingBottom:10}}>
            {tabs.map(tb=>(
              <button key={tb} onClick={()=>setTab(tb)} style={{padding:"6px 14px",fontSize:12,fontWeight:tab===tb?700:400,borderRadius:7,border:"none",background:tab===tb?C.blue+"18":"transparent",color:tab===tb?C.blue:C.muted,cursor:"pointer"}}>{tb}</button>
            ))}
          </div>
          {tab===t.enrollmentTab&&(
            <div style={{display:"flex",flexDirection:"column",gap:10}}>
              {[
                {name:"Mathematics Year 5",teacher:"Gafar Maulana",schedule:"Mon, Wed · 8:00–9:30 AM",room:"Room A",fee:"RM 120/month",since:"15 Jan 2024",status:"Active"},
                {name:"English Year 3",teacher:"Sari Mutiara",schedule:"Tue, Thu · 10:00–11:30 AM",room:"Room B",fee:"RM 100/month",since:"15 Jan 2024",status:"Active"},
                {name:"Science Year 5",teacher:"Bulan Kencana",schedule:"Sat · 9:00–11:00 AM",room:"Lab 1",fee:"RM 130/month",since:"3 Mar 2024",status:"Completed"},
              ].map((e,i)=>(
                <div key={i} style={{border:`0.5px solid ${C.border}`,borderRadius:8,padding:12}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
                    <div>
                      <div style={{fontSize:13,fontWeight:700,color:C.text}}>{e.name}</div>
                      <div style={{fontSize:11,color:C.muted,marginTop:2}}>👩‍🏫 {e.teacher} · 📍 {e.room}</div>
                      <div style={{fontSize:11,color:C.muted}}>🕐 {e.schedule}</div>
                    </div>
                    <Badge text={e.status==="Active"?t.statusActive:t.statusCompleted} color={e.status==="Active"?"green":"gray"}/>
                  </div>
                  <Divider/>
                  <div style={{display:"flex",gap:16}}>
                    <span style={{fontSize:11,color:C.muted}}>{t.feesTab}: <strong style={{color:C.text}}>{e.fee}</strong></span>
                    <span style={{fontSize:11,color:C.muted}}>{t.enrolled}: <strong style={{color:C.text}}>{e.since}</strong></span>
                  </div>
                </div>
              ))}
            </div>
          )}
          {tab===t.attendanceTab&&(
            <div>
              <div style={{display:"flex",gap:10,marginBottom:12}}>
                <Stat value="92%" label={t.overallAttendance} color={C.green}/>
                <Stat value="47/51" label={t.sessionsAttended} color={C.blue}/>
                <Stat value="4" label={t.absences} color={C.red}/>
                <Stat value="2" label={t.late} color={C.amber}/>
              </div>
              <TableHead cols={[{label:t.date},{label:t.classCol},{label:t.status},{label:t.note}]}/>
              {[
                ["28 Oct, Mon","Math Yr 5","Present",""],
                ["26 Oct, Sat","Science Yr 5","Present",""],
                ["24 Oct, Thu","English Yr 3","Late","Arrived 15 min late"],
                ["22 Oct, Tue","English Yr 3","Present",""],
                ["21 Oct, Mon","Math Yr 5","Absent","MC submitted"],
              ].map(([date,cls,status,note],i,arr)=>(
                <TableRow key={i} last={i===arr.length-1} cols={[{},{},{},{}]} values={[
                  <span style={{fontSize:11,color:C.muted}}>{date}</span>,
                  <span style={{fontSize:12,fontWeight:500}}>{cls}</span>,
                  <Badge text={status==="Present"?t.statusPresent:status==="Absent"?t.statusAbsent:t.statusLate} color={status==="Present"?"green":status==="Absent"?"red":"amber"}/>,
                  <span style={{fontSize:11,color:C.muted}}>{note}</span>,
                ]}/>
              ))}
            </div>
          )}
          {tab===t.resultsTab&&(
            <div>
              {[{subject:"Mathematics Year 5",avg:"87%"},{subject:"English Year 3",avg:"79%"}].map((sub,si)=>(
                <div key={si} style={{marginBottom:14}}>
                  <div style={{fontSize:12,fontWeight:700,color:C.text,marginBottom:8}}>{sub.subject} — {t.averageGrade}: <span style={{color:C.green}}>{sub.avg}</span></div>
                  <TableHead cols={[{label:t.assessment},{label:t.date},{label:t.score},{label:t.grade},{label:t.remark}]}/>
                  {[["Mid-Year Test","15 Jun","84/100","B+","Good effort"],["Quiz 1","20 Jul","18/20","A","Excellent"],["Assignment","10 Aug","46/50","A-","Well done"]].map(([a,d,s,g,r],i,arr)=>(
                    <TableRow key={i} last={i===arr.length-1} cols={[{},{},{},{},{}]} values={[
                      <span style={{fontWeight:500}}>{a}</span>,
                      <span style={{fontSize:11,color:C.muted}}>{d}</span>,
                      <span style={{fontWeight:600,color:C.blue}}>{s}</span>,
                      <Badge text={g} color="green"/>,
                      <span style={{fontSize:11,color:C.muted}}>{r}</span>,
                    ]}/>
                  ))}
                </div>
              ))}
            </div>
          )}
          {tab===t.feesTab&&(
            <div>
              <div style={{display:"flex",gap:10,marginBottom:12}}>
                <Stat value="RM 1,640" label={t.totalPaid} color={C.green}/>
                <Stat value="RM 220" label={t.outstanding} color={C.red}/>
                <Stat value="RM 0" label={t.statusOverdue} color={C.muted}/>
              </div>
              <TableHead cols={[{label:t.invoiceCol},{label:t.description},{label:t.amount},{label:t.dueDate},{label:t.status},{label:""}]}/>
              {[
                ["INV-2024-089","Oct Tuition — Math Yr 5","Rp 650.000","31 Oct 2024","Unpaid"],
                ["INV-2024-088","Oct Tuition — English Yr 3","Rp 750.000","31 Oct 2024","Unpaid"],
                ["INV-2024-071","Sep Tuition — Math Yr 5","Rp 650.000","30 Sep 2024","Paid"],
                ["INV-2024-070","Sep Tuition — English Yr 3","Rp 750.000","30 Sep 2024","Paid"],
              ].map(([inv,desc,amt,due,status],i,arr)=>(
                <TableRow key={i} last={i===arr.length-1} cols={[{},{},{},{},{},{}]} values={[
                  <span style={{fontSize:11,fontFamily:"monospace",color:C.muted}}>{inv}</span>,
                  <span style={{fontSize:12}}>{desc}</span>,
                  <span style={{fontWeight:600}}>{amt}</span>,
                  <span style={{fontSize:11,color:C.muted}}>{due}</span>,
                  <Badge text={status==="Paid"?t.statusPaid:t.statusUnpaid} color={status==="Paid"?"green":"amber"}/>,
                  status==="Unpaid"?<Btn label={t.payNow} sm primary/>:<Btn label={t.receipt} sm outline/>,
                ]}/>
              ))}
            </div>
          )}
          {tab===t.documentsTab&&(
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
              {[["IC Copy","PDF · 245 KB · Jan 2024"],["Birth Certificate","PDF · 312 KB · Jan 2024"],["Health Form","PDF · 78 KB · Jan 2024"],["Consent Letter","PDF · 56 KB · Mar 2024"]].map(([name,meta])=>(
                <div key={name} style={{border:`0.5px solid ${C.border}`,borderRadius:8,padding:12,display:"flex",alignItems:"center",gap:10}}>
                  <div style={{fontSize:24}}>📄</div>
                  <div style={{flex:1}}>
                    <div style={{fontSize:12,fontWeight:600,color:C.text}}>{name}</div>
                    <div style={{fontSize:10,color:C.hint}}>{meta}</div>
                  </div>
                  <button style={{fontSize:11,color:C.blue,background:"none",border:"none",cursor:"pointer"}}>↓</button>
                </div>
              ))}
              <div style={{border:`1.5px dashed ${C.border}`,borderRadius:8,padding:12,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:4,cursor:"pointer"}}>
                <div style={{fontSize:24}}>📎</div>
                <div style={{fontSize:11,color:C.muted}}>Upload document</div>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}

function ClassSchedule() {
  const t = useT();
  const days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const times = ["8:00","9:00","10:00","11:00","12:00","1:00","2:00","3:00","4:00","5:00"];
  const classes = [
    {day:0,start:0,span:2,name:"Math Yr 5",room:"Room A",teacher:"Noor Kesuma",color:"#3b82f620",border:C.blue},
    {day:1,start:2,span:2,name:"English Yr 3",room:"Room B",teacher:"Fariz",color:"#10b98120",border:C.green},
    {day:2,start:0,span:2,name:"Math Yr 5",room:"Room A",teacher:"Noor Kesuma",color:"#3b82f620",border:C.blue},
    {day:2,start:3,span:2,name:"BM Yr 4",room:"Room C",teacher:"Halim",color:"#7c3aed20",border:C.purple},
    {day:3,start:2,span:2,name:"English Yr 3",room:"Room B",teacher:"Fariz",color:"#10b98120",border:C.green},
    {day:3,start:5,span:2,name:"Science Yr 6",room:"Lab 1",teacher:"Laila Wihasfina",color:"#f59e0b20",border:C.amber},
    {day:4,start:3,span:2,name:"BM Yr 6",room:"Room C",teacher:"Halim",color:"#7c3aed20",border:C.purple},
    {day:5,start:1,span:3,name:"Math Yr 6",room:"Room A",teacher:"Noor Kesuma",color:"#3b82f620",border:C.blue},
    {day:5,start:1,span:3,name:"Science Yr 5",room:"Lab 1",teacher:"Laila Wihasfina",color:"#f59e0b20",border:C.amber},
  ];
  const cellH = 44;
  return (
    <div style={{padding:18}}>
      <div style={{display:"flex",gap:8,marginBottom:14,flexWrap:"wrap"}}>
        <Select label={t.allClasses}/><Select label={t.allEducators}/><Select label={t.allRooms}/>
        <div style={{flex:1}}/>
        <Btn label={t.week} primary sm/><Btn label={t.day} sm outline/><Btn label={t.month} sm outline/>
        <Btn label={t.newClass} primary/>
      </div>
      <Card p={0}>
        <div style={{display:"grid",gridTemplateColumns:`70px ${days.map(()=>"1fr").join(" ")}`,borderBottom:`0.5px solid ${C.border}`}}>
          <div style={{padding:"10px 8px",borderRight:`0.5px solid ${C.border}`}}/>
          {days.map((d,di)=>(
            <div key={d} style={{padding:"10px 8px",textAlign:"center",fontSize:12,fontWeight:700,color:C.text,borderRight:`0.5px solid ${C.border}`}}>
              {d.slice(0,3)}<div style={{fontSize:10,color:C.hint,fontWeight:400}}>{["28 Oct","29 Oct","30 Oct","31 Oct","1 Nov","2 Nov"][di]}</div>
            </div>
          ))}
        </div>
        <div style={{position:"relative"}}>
          {times.map((t2,ti)=>(
            <div key={t2} style={{display:"grid",gridTemplateColumns:`70px ${days.map(()=>"1fr").join(" ")}`,height:cellH}}>
              <div style={{fontSize:10,color:C.hint,padding:"4px 8px",borderRight:`0.5px solid ${C.border}`,paddingTop:6}}>{t2}</div>
              {days.map((_,di)=><div key={di} style={{borderRight:`0.5px solid ${C.border}`,borderBottom:`0.5px solid ${C.border}8`}}/>)}
            </div>
          ))}
          {classes.map((cls,i)=>(
            <div key={i} style={{position:"absolute",left:`calc(70px + (100% - 70px) * ${cls.day} / 6 + 3px)`,top:cls.start*cellH+2,width:`calc((100% - 70px) / 6 - 6px)`,height:cls.span*cellH-4,background:cls.color,border:`1.5px solid ${cls.border}`,borderRadius:6,padding:"4px 6px",overflow:"hidden",cursor:"pointer"}}>
              <div style={{fontSize:11,fontWeight:700,color:cls.border}}>{cls.name}</div>
              <div style={{fontSize:10,color:C.muted}}>{cls.room}</div>
              <div style={{fontSize:10,color:C.muted}}>{cls.teacher}</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

function FeePayments() {
  const t = useT();
  return (
    <div style={{padding:18,display:"flex",flexDirection:"column",gap:14}}>
      <div style={{display:"flex",gap:10}}>
        <Stat value="RM 18,400" label={t.revenueOct} sub="↑ 8% vs Sep" color={C.green} icon="💰"/>
        <Stat value="RM 3,200" label={t.outstanding} sub="22 unpaid" color={C.amber} icon="⏳"/>
        <Stat value="RM 1,600" label={t.statusOverdue} sub="11 invoices 30+ days" color={C.red} icon="⚠️"/>
        <Stat value="89%" label={t.collectionRate} sub="Oct 2024" color={C.blue} icon="📊"/>
      </div>
      <Card p={0}>
        <div style={{padding:"12px 14px",display:"flex",gap:8,borderBottom:`0.5px solid ${C.border}`,alignItems:"center",flexWrap:"wrap"}}>
          <Input placeholder={`🔍  Search by student, invoice...`} style={{flex:1,minWidth:180}}/>
          <Select label={t.allStatus}/><Select label="Oct 2024"/>
          <Btn label={t.newInvoice} primary/><Btn label={t.export} outline/>
        </div>
        <TableHead cols={[{label:t.invoiceCol},{label:t.studentCol},{label:t.description},{label:t.amount},{label:t.dueDate},{label:t.status},{label:"Action"}]}/>
        {[
          ["INV-2024-099","Aiman Haziq","Oct Tuition × 2 courses","RM 220","31 Oct","Unpaid"],
          ["INV-2024-098","Nurul Ain","Oct Tuition × 2 courses","RM 230","31 Oct","Paid"],
          ["INV-2024-097","Farhan Izzat","Oct Tuition — Science","RM 130","31 Oct","Overdue"],
          ["INV-2024-096","Siti Hajar","Oct Tuition × 2 courses","RM 250","31 Oct","Paid"],
          ["INV-2024-095","Izzuddin Hafiz","Sep Tuition","RM 120","30 Sep","Overdue"],
          ["INV-2024-094","Khairul Amirul","Oct Tuition","RM 120","31 Oct","Partial"],
        ].map(([inv,student,desc,amt,due,status],i,arr)=>(
          <TableRow key={i} last={i===arr.length-1} cols={[{},{},{},{},{},{},{}]} values={[
            <span style={{fontSize:11,fontFamily:"monospace",color:C.muted}}>{inv}</span>,
            <div style={{display:"flex",alignItems:"center",gap:6}}><Avatar name={student} size={22}/><span style={{fontWeight:600}}>{student}</span></div>,
            <span style={{fontSize:11,color:C.muted}}>{desc}</span>,
            <span style={{fontWeight:700}}>{amt}</span>,
            <span style={{fontSize:11,color:status==="Overdue"?C.red:C.muted}}>{due}</span>,
            <Badge text={status==="Paid"?t.statusPaid:status==="Overdue"?t.statusOverdue:status==="Partial"?t.statusPartial:t.statusUnpaid} color={status==="Paid"?"green":status==="Overdue"?"red":status==="Partial"?"amber":"gray"}/>,
            <div style={{display:"flex",gap:4}}>
              {status==="Unpaid"&&<Btn label="Record" sm primary/>}
              {status==="Overdue"&&<Btn label={t.remind.replace(" →","")} sm danger/>}
              {status==="Paid"&&<Btn label={t.receipt} sm outline/>}
              {status==="Partial"&&<Btn label={t.edit} sm outline/>}
            </div>,
          ]}/>
        ))}
      </Card>
    </div>
  );
}

function Enrollment() {
  const t = useT();
  const [step, setStep] = useState(1);
  const steps = [[t.studentInfo],[t.selectCourses],[t.feePlan],[t.confirmStep]];
  return (
    <div style={{padding:18}}>
      <div style={{display:"flex",alignItems:"center",gap:0,marginBottom:20}}>
        {steps.map(([label],i)=>(
          <div key={label} style={{display:"flex",alignItems:"center"}}>
            <div style={{display:"flex",alignItems:"center",gap:8,cursor:"pointer"}} onClick={()=>setStep(i+1)}>
              <div style={{width:28,height:28,borderRadius:"50%",background:step>i?C.blue:step===i+1?C.blue:"#e2e8f0",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:700,color:step>=i+1?"#fff":C.hint}}>{step>i+1?"✓":i+1}</div>
              <span style={{fontSize:12,fontWeight:step===i+1?700:400,color:step>=i+1?C.text:C.hint}}>{label}</span>
            </div>
            {i<3&&<div style={{width:40,height:2,background:step>i+1?C.blue:C.border,margin:"0 8px"}}/>}
          </div>
        ))}
      </div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 340px",gap:14}}>
        <Card>
          {step===1&&(
            <div>
              <div style={{fontSize:14,fontWeight:700,marginBottom:16}}>{t.studentInfo}</div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:12}}>
                {[t.fullName,t.icPassport,t.dob,t.genderLabel,t.school,t.schoolYear].map(l=>(
                  <div key={l}><Label text={l}/><Input placeholder={l}/></div>
                ))}
              </div>
              <Label text={t.homeAddress}/><Input placeholder={t.fullAddress} style={{marginBottom:12}}/>
              <div style={{fontSize:13,fontWeight:700,margin:"16px 0 12px"}}>{t.parentGuardianSection}</div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:12}}>
                {[t.parentName,t.relationship,t.phoneNumber,t.emailAddress].map(l=>(
                  <div key={l}><Label text={l}/><Input placeholder={l}/></div>
                ))}
              </div>
              <div style={{display:"flex",justifyContent:"flex-end"}}><Btn label={`${t.next} ${t.selectCourses}`} primary onClick={()=>setStep(2)}/></div>
            </div>
          )}
          {step===2&&(
            <div>
              <div style={{fontSize:14,fontWeight:700,marginBottom:16}}>{t.availableCourses}</div>
              <Input placeholder={t.searchCourses} style={{marginBottom:12}}/>
              {[
                {name:"Mathematics Year 5",teacher:"Noor Khalifah",schedule:"Mon & Wed · 8:00–9:30 AM",room:"Room A",fee:"RM 120/month",spots:2,selected:true},
                {name:"English Year 3",teacher:"Fariz Abdullah",schedule:"Tue & Thu · 10:00–11:30 AM",room:"Room B",fee:"RM 100/month",spots:8,selected:false},
                {name:"Science Year 5",teacher:"Laila Wihasfina",schedule:"Sat · 9:00–11:00 AM",room:"Lab 1",fee:"RM 130/month",spots:0,selected:false},
                {name:"BM Year 4",teacher:"Halim Gustami",schedule:"Wed · 2:00–3:30 PM",room:"Room C",fee:"RM 100/month",spots:4,selected:false},
              ].map((c,i)=>(
                <div key={i} style={{border:`1.5px solid ${c.selected?C.blue:C.border}`,borderRadius:8,padding:12,marginBottom:8,background:c.selected?C.blue+"08":"#fff",opacity:c.spots===0?0.5:1}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
                    <div>
                      <div style={{fontSize:13,fontWeight:700,color:C.text}}>{c.name}</div>
                      <div style={{fontSize:11,color:C.muted}}>👩‍🏫 {c.teacher} · 🕐 {c.schedule} · 📍 {c.room}</div>
                    </div>
                    <div style={{textAlign:"right"}}>
                      <div style={{fontSize:13,fontWeight:700,color:C.blue}}>{c.fee}</div>
                      {c.spots===0?<Badge text={t.statusFull} color="red"/>:<Badge text={`${c.spots} ${t.spotsLeft}`} color="green"/>}
                    </div>
                  </div>
                  {c.spots>0&&<div style={{marginTop:8}}><input type="checkbox" defaultChecked={c.selected} readOnly/><span style={{fontSize:11,marginLeft:6,color:C.muted}}>{t.enrollInCourse}</span></div>}
                </div>
              ))}
              <div style={{display:"flex",justifyContent:"space-between"}}>
                <Btn label={t.back} outline onClick={()=>setStep(1)}/>
                <Btn label={`${t.next} ${t.feePlan}`} primary onClick={()=>setStep(3)}/>
              </div>
            </div>
          )}
          {step===3&&(
            <div>
              <div style={{fontSize:14,fontWeight:700,marginBottom:16}}>{t.feeDiscounts}</div>
              <Card style={{background:"#f8fafc",marginBottom:14}}>
                <div style={{fontSize:12,fontWeight:700,marginBottom:8}}>{t.selectedCourses}</div>
                {[["Mathematics Year 5","Rp 650,000/month"],["English Year 3","Rp 750,000/month"]].map(([name,fee])=>(
                  <div key={name} style={{display:"flex",justifyContent:"space-between",padding:"6px 0",borderBottom:`0.5px solid ${C.border}`}}>
                    <span style={{fontSize:12}}>{name}</span><span style={{fontSize:12,fontWeight:600}}>{fee}</span>
                  </div>
                ))}
                <div style={{display:"flex",justifyContent:"space-between",padding:"8px 0 0"}}>
                  <span style={{fontSize:13,fontWeight:700}}>{t.totalPerMonth}</span>
                  <span style={{fontSize:13,fontWeight:700,color:C.blue}}>Rp 220,000</span>
                </div>
              </Card>
              <Label text={t.discountPromo}/><div style={{display:"flex",gap:8,marginBottom:12}}><Input placeholder={t.enterPromoCode}/><Btn label={t.apply} outline/></div>
              <Label text={t.registrationFee}/><Input placeholder="Rp 50,000 (one-time)" style={{marginBottom:12}}/>
              <Label text={t.paymentStartDate}/><Input placeholder="Nov 2024" style={{marginBottom:12}}/>
              <Label text={t.billingCycle}/><Select label={`Monthly (auto-generate)`}/>
              <div style={{display:"flex",justifyContent:"space-between",marginTop:16}}>
                <Btn label={t.back} outline onClick={()=>setStep(2)}/>
                <Btn label={`${t.next} ${t.confirmStep}`} primary onClick={()=>setStep(4)}/>
              </div>
            </div>
          )}
          {step===4&&(
            <div>
              <div style={{fontSize:14,fontWeight:700,marginBottom:16}}>{t.confirmStep}</div>
              <div style={{background:"#f0fdf4",border:`0.5px solid ${C.green}`,borderRadius:8,padding:14,marginBottom:14}}>
                <div style={{fontSize:12,fontWeight:700,color:C.green,marginBottom:8}}>{t.readyToConfirm}</div>
                {[["Student","Aiman Haziq bin Rosli (SC-2024-001)"],["Courses","Mathematics Year 5, English Year 3"],["Monthly Fee","RM 220/month"],["Registration Fee","RM 50 (one-time)"],["First Billing","November 2024"],["Confirmation","via WhatsApp & email"]].map(([k,v])=>(
                  <div key={k} style={{display:"flex",gap:12,padding:"4px 0",fontSize:12}}>
                    <span style={{color:C.muted,width:120,flexShrink:0}}>{k}</span>
                    <span style={{fontWeight:500,color:C.text}}>{v}</span>
                  </div>
                ))}
              </div>
              <div style={{display:"flex",justifyContent:"space-between"}}>
                <Btn label={t.back} outline onClick={()=>setStep(3)}/>
                <Btn label={t.confirmEnrollment} primary style={{background:C.green}}/>
              </div>
            </div>
          )}
        </Card>
        <div style={{display:"flex",flexDirection:"column",gap:12}}>
          <Card>
            <CardTitle text={t.enrollmentProgress}/>
            <div style={{fontSize:12,color:C.muted}}>{t.completingStep} {step} of 4</div>
            <div style={{marginTop:8,height:6,background:C.ph,borderRadius:3}}>
              <div style={{height:"100%",width:`${step*25}%`,background:C.blue,borderRadius:3,transition:"width .3s"}}/>
            </div>
          </Card>
          <Card>
            <CardTitle text={t.tips}/>
            {[t.tip1,t.tip2,t.tip3].map((tip,i)=>(
              <div key={i} style={{display:"flex",gap:6,marginBottom:8}}>
                <span style={{color:C.blue,flexShrink:0}}>•</span>
                <span style={{fontSize:11,color:C.muted,lineHeight:1.5}}>{tip}</span>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </div>
  );
}

function MarkAttendance() {
  const t = useT();
  const [marks, setMarks] = useState({});
  const studentNames = ["Aiman Haziq","Nurul Ain","Farhan Izzat","Siti Hajar","Izzuddin","Khairul Amirul","Maisarah Yusof","Ahmad Ridzwan","Zulaikha Aziz","Iqbal Hakim"];
  const statuses = [
    { key: "Present", label: t.statusPresent, color: C.green, bg: "#dcfce7" },
    { key: "Late",    label: t.statusLate,    color: C.amber, bg: "#fef3c7" },
    { key: "Absent",  label: t.statusAbsent,  color: C.red,   bg: "#fee2e2" },
    { key: "Excused", label: t.statusExcused, color: C.muted, bg: "#f1f5f9" },
  ];
  const toggle = (name, s) => setMarks(m => ({ ...m, [name]: s }));
  const counts = Object.values(marks).reduce((acc, s) => ({ ...acc, [s]: (acc[s]||0)+1 }), {});
  return (
    <div style={{padding:18}}>
      <div style={{display:"flex",gap:10,marginBottom:14,alignItems:"center",flexWrap:"wrap"}}>
        <Select label="Mathematics Year 5"/><Select label="28 Oct 2024, Monday"/><Select label="8:00–9:30 AM"/>
        <div style={{flex:1}}/>
        <div style={{display:"flex",gap:10}}>
          {statuses.map(s=><div key={s.key} style={{fontSize:11,color:C.muted}}><span style={{fontWeight:700,color:C.text}}>{counts[s.key]||0}</span> {s.label}</div>)}
        </div>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
        {studentNames.map((name,i)=>{
          const status = marks[name]||null;
          const found = statuses.find(s=>s.key===status);
          return (
            <Card key={i} style={{display:"flex",alignItems:"center",gap:12,padding:"10px 14px"}}>
              <Avatar name={name} size={34} color={found?found.color:C.hint}/>
              <div style={{flex:1}}>
                <div style={{fontSize:12,fontWeight:600,color:C.text}}>{name}</div>
                <div style={{fontSize:10,color:C.hint}}>SC-2024-{String(i+1).padStart(3,"0")}</div>
              </div>
              <div style={{display:"flex",gap:3}}>
                {statuses.map(s=>(
                  <button key={s.key} onClick={()=>toggle(name,s.key)} style={{padding:"4px 7px",fontSize:10,fontWeight:700,borderRadius:6,border:`1px solid ${status===s.key?s.color:C.border}`,background:status===s.key?s.bg:"transparent",color:status===s.key?s.color:C.hint,cursor:"pointer"}}>
                    {s.label[0]}
                  </button>
                ))}
              </div>
            </Card>
          );
        })}
      </div>
      <div style={{display:"flex",justifyContent:"flex-end",gap:8,marginTop:14}}>
        <Btn label={t.saveDraft} outline/>
        <Btn label={t.submitAttendance} primary style={{background:C.green}}/>
      </div>
    </div>
  );
}

function EnterGrades() {
  const t = useT();
  return (
    <div style={{padding:18}}>
      <div style={{display:"flex",gap:8,marginBottom:14,flexWrap:"wrap"}}>
        <Select label="Mathematics Year 5"/><Select label="Mid-Year Examination"/><Select label="Oct 2024"/>
        <div style={{flex:1}}/><Btn label={t.newAssessment} primary/>
      </div>
      <Card p={0}>
        <div style={{padding:"10px 14px",borderBottom:`0.5px solid ${C.border}`,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:8}}>
          <div style={{fontSize:12,color:C.muted}}>{t.maxScore} <strong style={{color:C.text}}>100</strong> · {t.passMark} <strong style={{color:C.text}}>50</strong> · 10 students</div>
          <div style={{display:"flex",gap:8}}><Btn label={t.importScores} outline sm/><Btn label={t.saveAll} primary sm/></div>
        </div>
        <TableHead cols={[{label:"#",w:"30px"},{label:t.studentCol},{label:t.score,w:"130px"},{label:t.grade,w:"80px"},{label:t.remark,w:"180px"},{label:t.status,w:"90px"}]}/>
        {[
          ["Aiman Haziq","84","B+","Good effort, well done!","Pass"],
          ["Nurul Ain","92","A","Excellent performance","Pass"],
          ["Farhan Izzat","61","C+","Needs improvement in algebra","Pass"],
          ["Siti Hajar","78","B","Good, keep it up","Pass"],
          ["Izzuddin Hafiz","45","F","Needs extra support","Fail"],
          ["Khairul Amirul","71","B-","Consistent effort shown","Pass"],
          ["Maisarah Yusof","88","A-","Very good work","Pass"],
          ["Ahmad Ridzwan","","","","—"],
        ].map(([name,score,grade,remark,status],i,arr)=>(
          <TableRow key={i} last={i===arr.length-1} cols={[{w:"30px"},{},{w:"130px"},{w:"80px"},{w:"180px"},{w:"90px"}]} values={[
            <span style={{fontSize:11,color:C.hint}}>{i+1}</span>,
            <div style={{display:"flex",alignItems:"center",gap:8}}><Avatar name={name} size={24}/><span style={{fontWeight:600}}>{name}</span></div>,
            <input readOnly defaultValue={score} placeholder="–" style={{width:70,padding:"4px 8px",fontSize:13,fontWeight:700,border:`0.5px solid ${C.border}`,borderRadius:6,textAlign:"center",color:C.blue}}/>,
            <Badge text={grade||"–"} color={grade==="A"||grade==="A-"?"green":grade==="F"?"red":grade?"blue":"gray"}/>,
            <input readOnly defaultValue={remark} placeholder={`${t.remark}...`} style={{width:"100%",padding:"4px 6px",fontSize:11,border:`0.5px solid ${C.border}`,borderRadius:5,color:C.muted}}/>,
            status==="—"?<span style={{fontSize:11,color:C.hint}}>—</span>:<Badge text={status==="Pass"?t.statusActive:t.statusOverdue} color={status==="Pass"?"green":"red"}/>,
          ]}/>
        ))}
      </Card>
    </div>
  );
}

function ParentDashboard() {
  const t = useT();
  return (
    <div style={{padding:18,display:"flex",flexDirection:"column",gap:14}}>
      <div style={{background:C.blue+"10",border:`0.5px solid ${C.blue}30`,borderRadius:10,padding:14,display:"flex",alignItems:"center",gap:14}}>
        <Avatar name="Aiman Haziq" size={52} color={C.blue}/>
        <div style={{flex:1}}>
          <div style={{fontSize:16,fontWeight:800,color:C.text}}>Aiman Haziq bin Rosli</div>
          <div style={{fontSize:12,color:C.muted}}>SC-2024-001 · Year 5 · 2 active courses</div>
          <div style={{display:"flex",gap:6,marginTop:6}}>
            <Badge text={t.statusActive} color="green"/><Badge text="Math Yr 5" color="blue"/><Badge text="English Yr 3" color="blue"/>
          </div>
        </div>
        <div style={{display:"flex",flexDirection:"column",gap:6}}>
          <Btn label={t.messageEducator} outline sm/><Btn label={t.payFees} primary sm/>
        </div>
      </div>
      <div style={{display:"flex",gap:10}}>
        <Stat value="92%" label={t.attendanceRate} sub="47 of 51 sessions" color={C.green} icon="✅"/>
        <Stat value="85%" label={t.averageGrade} sub="B+ overall" color={C.blue} icon="📈"/>
        <Stat value="RM 220" label={t.outstandingFees} sub="Due 31 Oct 2024" color={C.red} icon="💳"/>
        <Stat value="2" label={t.upcomingClasses} sub="Today, Mon 28 Oct" color={C.purple} icon="📅"/>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
        <Card>
          <CardTitle text={t.todaySchedule}/>
          {[["8:00–9:30 AM","Mathematics Year 5","Room A","Ustazah Nor"],["10:00–11:30 AM","English Year 3","Room B","Mr. Fariz"]].map(([time,cls,room,teacher],i)=>(
            <div key={i} style={{display:"flex",gap:10,padding:"8px 0",borderBottom:i<1?`0.5px solid ${C.border}`:"none"}}>
              <div style={{width:82,flexShrink:0}}>
                <div style={{fontSize:10,color:C.hint}}>{time.split("–")[0]}</div>
                <div style={{fontSize:10,color:C.hint}}>–{time.split("–")[1]}</div>
              </div>
              <div style={{width:3,background:C.blue,borderRadius:2,flexShrink:0}}/>
              <div>
                <div style={{fontSize:12,fontWeight:700,color:C.text}}>{cls}</div>
                <div style={{fontSize:11,color:C.muted}}>{teacher} · {room}</div>
              </div>
            </div>
          ))}
        </Card>
        <Card>
          <CardTitle text={t.latestResults} action={t.viewAll}/>
          {[["Mathematics Mid-Year","84/100","B+","green"],["English Assignment","46/50","A-","green"],["Science Quiz","17/20","A","green"],["BM Test","61/80","B","blue"]].map(([name,score,grade,c],i)=>(
            <div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"6px 0",borderBottom:i<3?`0.5px solid ${C.border}`:"none"}}>
              <div><div style={{fontSize:12,fontWeight:500}}>{name}</div><div style={{fontSize:11,color:C.muted}}>{score}</div></div>
              <Badge text={grade} color={c}/>
            </div>
          ))}
        </Card>
        <Card>
          <CardTitle text={t.attendanceThisMonth}/>
          <div style={{display:"flex",gap:3,marginBottom:8}}>
            {Array.from({length:20},(_,i)=><div key={i} style={{flex:1,height:20,borderRadius:3,background:i===8||i===15?C.red:i===4?C.amber:C.green,opacity:0.7}}/>)}
          </div>
          <div style={{display:"flex",gap:12,fontSize:11,color:C.muted}}>
            <span>🟢 {t.statusPresent}: 17</span><span>🟡 {t.statusLate}: 1</span><span>🔴 {t.statusAbsent}: 2</span>
          </div>
        </Card>
        <Card>
          <CardTitle text={t.feeStatement} action={`${t.payNow} →`}/>
          {[["Oct Tuition — Math Yr 5","Rp 650,000","Unpaid","amber"],["Oct Tuition — English Yr 3","Rp 100,000","Unpaid","amber"],["Sep Tuition — Math Yr 5","Rp 120,000","Paid","green"],["Sep Tuition — English Yr 3","Rp 100,000","Paid","green"]].map(([desc,amt,status,c],i)=>(
            <div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"6px 0",borderBottom:i<3?`0.5px solid ${C.border}`:"none"}}>
              <div style={{flex:1}}><div style={{fontSize:12}}>{desc}</div></div>
              <div style={{display:"flex",alignItems:"center",gap:8}}>
                <span style={{fontSize:12,fontWeight:700}}>{amt}</span>
                <Badge text={status==="Paid"?t.statusPaid:t.statusUnpaid} color={c}/>
              </div>
            </div>
          ))}
          <div style={{marginTop:10,padding:10,background:C.red+"10",borderRadius:7,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <span style={{fontSize:12,fontWeight:700,color:C.red}}>{t.totalOutstanding} Rp 220,000</span>
            <Btn label={t.payNow} primary sm style={{background:C.green}}/>
          </div>
        </Card>
      </div>
    </div>
  );
}

function StudentDashboard() {
  const t = useT();
  return (
    <div style={{padding:18,display:"flex",flexDirection:"column",gap:14}}>
      <div style={{display:"flex",gap:10}}>
        <Stat value="92%" label={t.myAttendance} color={C.green} icon="✅"/>
        <Stat value="85%" label={t.averageGrade} color={C.blue} icon="📈"/>
        <Stat value="2" label={t.classesToday} color={C.purple} icon="📅"/>
        <Stat value="RM 220" label={t.outstandingFees} color={C.red} icon="💳"/>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"1.5fr 1fr",gap:12}}>
        <Card>
          <CardTitle text={`${t.mySchedule} — Mon 28 Oct`} action={t.viewAll}/>
          {[{time:"8:00 AM",end:"9:30 AM",name:"Mathematics Year 5",room:"Room A",teacher:"Ustazah Nor Hidayah",color:C.blue},{time:"10:00 AM",end:"11:30 AM",name:"English Year 3",room:"Room B",teacher:"Mr. Fariz Abdullah",color:C.green}].map((c,i)=>(
            <div key={i} style={{display:"flex",gap:12,padding:"10px 0",borderBottom:i<1?`0.5px solid ${C.border}`:"none"}}>
              <div style={{width:3,background:c.color,borderRadius:2,flexShrink:0}}/>
              <div style={{flex:1}}>
                <div style={{fontSize:13,fontWeight:700,color:C.text}}>{c.name}</div>
                <div style={{fontSize:11,color:C.muted}}>👩‍🏫 {c.teacher} · 📍 {c.room}</div>
                <div style={{fontSize:11,color:C.muted}}>🕐 {c.time} – {c.end}</div>
              </div>
              <Badge text={t.statusPending} color="blue"/>
            </div>
          ))}
        </Card>
        <Card>
          <CardTitle text={t.recentGrades} action={`${t.viewAll} →`}/>
          {[["Math Mid-Year","84/100","B+","green"],["English Assign.","46/50","A-","green"],["Science Quiz","17/20","A","green"],["BM Test","61/80","B","blue"]].map(([name,score,grade,c],i)=>(
            <div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"7px 0",borderBottom:i<3?`0.5px solid ${C.border}`:"none"}}>
              <div><div style={{fontSize:12,fontWeight:500}}>{name}</div><div style={{fontSize:11,color:C.muted}}>{score}</div></div>
              <Badge text={grade} color={c}/>
            </div>
          ))}
        </Card>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
        <Card>
          <CardTitle text={t.learningMaterials} action={`${t.viewAll} →`}/>
          {[["Math Yr 5 — Chapter 6 Notes","PDF · 2.4 MB · 25 Oct","📄"],["English — Week 8 Slides","PPTX · 3.1 MB · 22 Oct","📊"],["Science — Lab Report Template","DOCX · 180 KB · 20 Oct","📝"]].map(([name,meta,icon])=>(
            <div key={name} style={{display:"flex",alignItems:"center",gap:10,padding:"7px 0",borderBottom:`0.5px solid ${C.border}`}}>
              <span style={{fontSize:20}}>{icon}</span>
              <div style={{flex:1}}>
                <div style={{fontSize:12,fontWeight:500,color:C.text}}>{name}</div>
                <div style={{fontSize:10,color:C.hint}}>{meta}</div>
              </div>
              <button style={{fontSize:12,color:C.blue,background:"none",border:"none",cursor:"pointer"}}>↓</button>
            </div>
          ))}
        </Card>
        <Card>
          <CardTitle text={t.myFees} action={`${t.payNow} →`}/>
          {[["Oct Tuition — Math Yr 5","Rp 650,000","amber"],["Oct Tuition — English Yr 3","Rp 100,000","amber"],["Sep Tuition — All","Rp 220,000","green"]].map(([desc,amt,c],i)=>(
            <div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"7px 0",borderBottom:i<2?`0.5px solid ${C.border}`:"none"}}>
              <span style={{fontSize:12,color:C.text}}>{desc}</span>
              <div style={{display:"flex",alignItems:"center",gap:8}}><span style={{fontWeight:700}}>{amt}</span><Badge text={c==="green"?t.statusPaid:t.statusUnpaid} color={c}/></div>
            </div>
          ))}
          <div style={{marginTop:10,padding:10,background:"#fef3c7",borderRadius:7}}>
            <div style={{fontSize:11,fontWeight:700,color:C.amber}}>⚠️ Rp 220,000 {t.dueFees} 31 Oct 2024</div>
          </div>
        </Card>
      </div>
    </div>
  );
}

function Reports() {
  const t = useT();
  const reportList = [t.revenue,t.outstandingFeesReport,t.enrollmentTrends,t.classUtilisation,t.educatorWorkload,t.studentRetention,t.attendanceSummary,t.academicPerformance,t.plSummary];
  return (
    <div style={{padding:18,display:"flex",gap:14}}>
      <div style={{width:200,display:"flex",flexDirection:"column",gap:6}}>
        {reportList.map((r,i)=>(
          <div key={r} style={{padding:"8px 12px",borderRadius:7,background:i===0?C.blue:"transparent",color:i===0?"#fff":C.muted,fontSize:12,fontWeight:i===0?600:400,cursor:"pointer",border:`0.5px solid ${i===0?C.blue:C.border}`}}>{r}</div>
        ))}
      </div>
      <div style={{flex:1,display:"flex",flexDirection:"column",gap:12}}>
        <Card>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14,flexWrap:"wrap",gap:8}}>
            <div>
              <div style={{fontSize:15,fontWeight:700}}>{t.revenue}</div>
              <div style={{fontSize:11,color:C.muted}}>{t.monthlyRevByCourse}</div>
            </div>
            <div style={{display:"flex",gap:8}}>
              <Select label={t.selectDateRange}/><Btn label={t.exportPDF} outline sm/><Btn label={t.exportExcel} outline sm/>
            </div>
          </div>
          <div style={{display:"flex",gap:10,marginBottom:14}}>
            <Stat value="Rp 13,410,000" label={t.totalCollectedYTD} color={C.green}/>
            <Stat value="Rp 1,840,000" label={t.bestMonth} color={C.blue}/>
            <Stat value="Rp 3,200,000" label={t.currentlyOutstanding} color={C.red}/>
            <Stat value="89%" label={t.collectionRate} color={C.purple}/>
          </div>
          <MiniBar values={[8200,9800,11200,10400,14000,13200,15800,16200,17100,18400]} h={100}/>
          <div style={{display:"flex",justifyContent:"space-between",marginTop:6}}>
            {["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"].map(m=><span key={m} style={{fontSize:10,color:C.hint}}>{m}</span>)}
          </div>
        </Card>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
          <Card>
            <CardTitle text={t.revenueByCourse}/>
            {[["Mathematics","Rp 542,000","37%",C.blue],["English","Rp 386,000","26%",C.green],["Science","Rp 28,400","19%",C.amber],["BM","Rp 12,900","9%",C.purple],["Others","Rp 13,200","9%",C.hint]].map(([course,amt,pct,color])=>(
              <div key={course}>
                <div style={{display:"flex",justifyContent:"space-between",marginBottom:3}}>
                  <span style={{fontSize:11,color:C.text}}>{course}</span>
                  <span style={{fontSize:11,fontWeight:700}}>{amt}</span>
                </div>
                <div style={{height:6,background:C.ph,borderRadius:3,marginBottom:8}}>
                  <div style={{height:"100%",width:pct,background:color,borderRadius:3}}/>
                </div>
              </div>
            ))}
          </Card>
          <Card>
            <CardTitle text={t.paymentMethodBreakdown}/>
            {[["Bank Transfer","52%",C.blue],["Online (Midtrans/Xendit)","28%",C.green],["Cash","14%",C.amber],["E-Wallet","6%",C.purple]].map(([method,pct,color])=>(
              <div key={method}>
                <div style={{display:"flex",justifyContent:"space-between",marginBottom:3}}>
                  <span style={{fontSize:11,color:C.text}}>{method}</span>
                  <span style={{fontSize:11,fontWeight:700}}>{pct}</span>
                </div>
                <div style={{height:6,background:C.ph,borderRadius:3,marginBottom:8}}>
                  <div style={{height:"100%",width:pct,background:color,borderRadius:3}}/>
                </div>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </div>
  );
}

function EducatorDashboard() {
  const t = useT();
  return (
    <div style={{padding:18,display:"flex",flexDirection:"column",gap:14}}>
      <div style={{display:"flex",gap:10}}>
        <Stat value="5" label={t.myClassesCount} color={C.blue} icon="📚"/>
        <Stat value="89" label={t.totalStudentsCount} color={C.green} icon="🎓"/>
        <Stat value="2" label={t.classesToday} color={C.purple} icon="📅"/>
        <Stat value="3" label={t.gradesPending} color={C.amber} icon="📝"/>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
        <Card>
          <CardTitle text={t.myClassesToday}/>
          {[["8:00–9:30 AM","Math Yr 5","Room A","18 students"],["2:00–3:30 PM","Math Yr 6","Room A","14 students"]].map(([time,name,room,count],i)=>(
            <div key={i} style={{display:"flex",gap:10,padding:"8px 0",borderBottom:i<1?`0.5px solid ${C.border}`:"none"}}>
              <div style={{width:3,background:C.blue,borderRadius:2,flexShrink:0}}/>
              <div style={{flex:1}}>
                <div style={{fontSize:13,fontWeight:700}}>{name}</div>
                <div style={{fontSize:11,color:C.muted}}>{time} · {room} · {count}</div>
              </div>
              <Btn label={t.markAttendance} sm primary/>
            </div>
          ))}
        </Card>
        <Card>
          <CardTitle text={t.pendingTasks}/>
          {[["Enter grades","Math Yr 5 — Quiz 3","Due today","red"],["Enter grades","Math Yr 6 — Mid-Year","Due 30 Oct","amber"],["Upload materials","Chapter 7 Notes","Due 1 Nov","amber"]].map(([type,name,due,c],i)=>(
            <div key={i} style={{display:"flex",alignItems:"center",gap:10,padding:"7px 0",borderBottom:i<2?`0.5px solid ${C.border}`:"none"}}>
              <div style={{flex:1}}><div style={{fontSize:12,fontWeight:500}}>{type}</div><div style={{fontSize:11,color:C.muted}}>{name}</div></div>
              <Badge text={due} color={c}/>
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
}

function EducatorManagement() {
  const t = useT();
  return (
    <div style={{padding:18,display:"flex",flexDirection:"column",gap:14}}>
      <div style={{display:"flex",gap:10}}>
        <Stat value="18" label={t.totalEducators} color={C.blue} icon="👩‍🏫"/>
        <Stat value="14" label={t.fullTime} color={C.green} icon="✅"/>
        <Stat value="4" label={t.partTimeFreelance} color={C.purple} icon="🕐"/>
        <Stat value="2" label={t.onLeaveToday} color={C.amber} icon="🏖️"/>
      </div>
      <Card p={0}>
        <div style={{padding:"12px 14px",display:"flex",gap:8,borderBottom:`0.5px solid ${C.border}`,flexWrap:"wrap"}}>
          <Input placeholder={t.searchEducator} style={{flex:1,minWidth:180}}/>
          <Select label={t.allSubjects}/><Select label={t.allStatus}/>
          <Btn label={t.addEducator} primary/>
        </div>
        <TableHead cols={[{label:t.educator},{label:t.subjects},{label:t.classesPerWeek},{label:t.type},{label:t.status},{label:""}]}/>
        {[["Ustazah Nor Hidayah","Mathematics","8 classes","Full-Time","Active"],["Mr. Fariz Abdullah","English","6 classes","Full-Time","Active"],["Cik Laila bt Hamid","Science","5 classes","Part-Time","Active"],["En. Halim Hashim","Bahasa Melayu","7 classes","Full-Time","On Leave"],["Pn. Sarina Daud","English, BM","4 classes","Freelance","Active"]].map(([name,subj,cls,type,status],i,arr)=>(
          <TableRow key={i} last={i===arr.length-1} cols={[{},{},{},{},{},{}]} values={[
            <div style={{display:"flex",alignItems:"center",gap:8}}><Avatar name={name} size={26} color={C.purple}/><span style={{fontWeight:600}}>{name}</span></div>,
            <Badge text={subj} color="purple"/>,
            <span style={{color:C.muted,fontSize:12}}>{cls}</span>,
            <Badge text={type==="Full-Time"?t.fullTime:type==="Part-Time"?t.partTimeFreelance:"Freelance"} color={type==="Full-Time"?"blue":type==="Part-Time"?"green":"amber"}/>,
            <Badge text={status==="Active"?t.statusActive:t.onLeaveToday} color={status==="Active"?"green":status==="On Leave"?"amber":"gray"}/>,
            <Btn label={t.view} sm outline/>,
          ]}/>
        ))}
      </Card>
    </div>
  );
}

// ─── Screen Registry ──────────────────────────────────────────────────────────
function buildScreens(t) {
  return {
    [t.dashboard]:           { title: t.dashboard, sub: "Overview & quick actions", role: "Management", component: AdminDashboard },
    [t.reportsAnalytics]:    { title: t.reportsAnalytics, sub: "Business intelligence & exports", role: "Management", component: Reports },
    [t.studentManagement]:   { title: t.studentManagement, sub: `247 ${t.active}`, role: "Management", component: StudentManagement },
    ["StudentProfile"]:      { title: "Aiman Haziq bin Rosli", sub: "SC-2024-001", role: "Management", component: StudentProfile },
    [t.educatorManagement]:  { title: t.educatorManagement, sub: "Staff records", role: "Management", component: EducatorManagement },
    [t.classSchedule]:       { title: t.classSchedule, sub: "28 Oct – 2 Nov 2024", role: "Management", component: ClassSchedule },
    [t.enrollment]:          { title: t.enrollment, sub: "4-step wizard", role: "Management", component: Enrollment },
    [t.feePayments]:         { title: t.feePayments, sub: "Invoices, collections & outstanding", role: "Management", component: FeePayments },
    [t.myDashboard]:         { title: t.myDashboard, sub: "Welcome back, Ustazah Nor", role: "Educator", component: EducatorDashboard },
    [t.markAttendance]:      { title: t.markAttendance, sub: "Real-time session attendance", role: "Educator", component: MarkAttendance },
    [t.enterGrades]:         { title: t.enterGrades, sub: "Assessment scores & remarks", role: "Educator", component: EnterGrades },
    [t.mySchedule]:          { title: t.mySchedule, sub: "Aiman Haziq", role: "Student", component: StudentDashboard },
    ["ParentOverview"]:      { title: "Overview", sub: "Monitoring Aiman Haziq", role: "Parent", component: ParentDashboard },
  };
}

const ROLE_COLORS = { Management: C.blue, Educator: C.green, Student: C.amber, Parent: C.purple };

// ─── Main App ─────────────────────────────────────────────────────────────────
export default function App() {
  const [role, setRole] = useState("Management");
  const [lang, setLang] = useState("en");
  const t = TRANSLATIONS[lang];

  const ROLE_DEFAULTS = {
    Management: t.dashboard,
    Educator: t.myDashboard,
    Student: t.mySchedule,
    Parent: "ParentOverview",
  };

  const [screen, setScreen] = useState(t.dashboard);

  const handleRole = (r) => {
    setRole(r);
    setScreen(ROLE_DEFAULTS[r]);
  };

  const handleLang = (l) => {
    const newT = TRANSLATIONS[l];
    const newDefaults = {
      Management: newT.dashboard,
      Educator: newT.myDashboard,
      Student: newT.mySchedule,
      Parent: "ParentOverview",
    };
    setLang(l);
    setScreen(newDefaults[role]);
  };

  const SCREENS = buildScreens(t);
  const sc = SCREENS[screen] || SCREENS[ROLE_DEFAULTS[role]];
  const Component = sc?.component;

  const roleLabels = {
    Management: t.management,
    Educator: t.educator,
    Student: t.student,
    Parent: t.parent,
  };

  const screenCount = Object.values(SCREENS).filter(s => s.role === role).length;

  return (
    <LangContext.Provider value={lang}>
      <div style={{ fontFamily: "'DM Sans','Helvetica Neue',sans-serif", background: C.bg, minHeight: "100vh", display: "flex", flexDirection: "column" }}>

        {/* ── Top bar ── */}
        <div style={{ background: C.card, borderBottom: `0.5px solid ${C.border}`, padding: "10px 16px", display: "flex", gap: 6, alignItems: "center", flexWrap: "wrap" }}>
          {/* App brand */}
          <div style={{ marginRight: 8 }}>
            <span style={{ fontSize: 13, fontWeight: 800, color: C.text, letterSpacing: -0.3 }}>{t.appName}</span>
          </div>

          {/* Viewing as label */}
          <span style={{ fontSize: 11, color: C.hint, marginRight: 2 }}>{t.viewingAs}</span>

          {/* Role switcher */}
          {["Management", "Educator", "Student", "Parent"].map(r => (
            <button
              key={r}
              onClick={() => handleRole(r)}
              style={{
                padding: "6px 16px", fontSize: 12, fontWeight: role === r ? 700 : 500,
                borderRadius: 20, border: `1.5px solid ${role === r ? ROLE_COLORS[r] : C.border}`,
                background: role === r ? ROLE_COLORS[r] + "15" : "transparent",
                color: role === r ? ROLE_COLORS[r] : C.muted,
                cursor: "pointer", transition: "all .15s",
              }}
            >
              {roleLabels[r]}
            </button>
          ))}

          <div style={{ flex: 1 }} />

          {/* Screen count */}
          <span style={{ fontSize: 11, color: C.hint, marginRight: 8 }}>
            {t.wireframeExplorer} · {screenCount} {t.screens}
          </span>

          {/* Language switcher */}
          <LangSwitcher lang={lang} setLang={handleLang} />
        </div>

        {/* ── App layout ── */}
        <div style={{ display: "flex", flex: 1, overflow: "hidden", height: "calc(100vh - 53px)" }}>
          <Sidebar role={role} active={screen} onNav={s => setScreen(s)} />
          <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
            <Header title={sc?.title || screen} sub={sc?.sub} actions={
              role === "Management" && screen === t.studentManagement
                ? <><Btn label={t.importCSV} outline sm /><Btn label={t.addStudent} primary sm /></>
                : role === "Management" && screen === t.classSchedule
                ? <Btn label={t.addClass} primary sm />
                : null
            } />
            <div style={{ flex: 1, overflowY: "auto" }}>
              {Component
                ? <Component />
                : (
                  <div style={{ padding: 40, textAlign: "center", color: C.hint }}>
                    <div style={{ fontSize: 40, marginBottom: 12 }}>🚧</div>
                    <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 4, color: C.muted }}>{t.screenComingSoon}</div>
                    <div style={{ fontSize: 12 }}>{t.clickSidebar}</div>
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>
    </LangContext.Provider>
  );
}
