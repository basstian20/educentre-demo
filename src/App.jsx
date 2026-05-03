import { useState } from "react";

const C = {
  bg: "#f0f2f5", card: "#ffffff", sidebar: "#12202e", sidebarHover: "#1e3347",
  sidebarActive: "#1d4ed8", border: "#e2e8f0", text: "#0f172a", muted: "#64748b",
  hint: "#94a3b8", ph: "#dde3ea", blue: "#3b82f6", green: "#16a34a",
  amber: "#d97706", red: "#dc2626", purple: "#7c3aed", teal: "#0891b2",
};

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
  <div style={{ padding: "7px 10px", fontSize: 12, border: `0.5px solid ${C.border}`, borderRadius: 7, background: "#fff", color: C.muted, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
    <span>{label}</span><span style={{ color: C.hint }}>▾</span>
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

const TableHead = ({ cols }) => (
  <div style={{ display: "grid", gridTemplateColumns: cols.map(c => c.w || "1fr").join(" "), padding: "8px 12px", background: "#f8fafc", borderBottom: `0.5px solid ${C.border}`, borderRadius: "0" }}>
    {cols.map((c, i) => <div key={i} style={{ fontSize: 10, fontWeight: 700, color: C.hint, textTransform: "uppercase", letterSpacing: 0.5 }}>{c.label}</div>)}
  </div>
);

const TableRow = ({ cols, values, last }) => (
  <div style={{ display: "grid", gridTemplateColumns: cols.map(c => c.w || "1fr").join(" "), padding: "9px 12px", borderBottom: last ? "none" : `0.5px solid ${C.border}`, alignItems: "center" }}>
    {values.map((v, i) => <div key={i} style={{ fontSize: 12, color: C.text }}>{v}</div>)}
  </div>
);

const Divider = () => <div style={{ height: "0.5px", background: C.border, margin: "12px 0" }} />;

// ─── Sidebar ─────────────────────────────────────────────────────────────────

const NAV = {
  Management: [
    { section: "Overview", items: ["Dashboard", "Reports & Analytics"] },
    { section: "People", items: ["Student Management", "Educator Management"] },
    { section: "Academics", items: ["Class Schedule", "Enrollment", "Attendance Overview", "Results & Grades"] },
    { section: "Finance", items: ["Fee & Payments", "Invoices", "Payroll"] },
    { section: "System", items: ["Communication", "Settings"] },
  ],
  Educator: [
    { section: "Overview", items: ["My Dashboard"] },
    { section: "Classes", items: ["My Classes", "Class Schedule"] },
    { section: "Students", items: ["Mark Attendance", "Enter Grades", "Upload Materials"] },
    { section: "Admin", items: ["Leave Request", "My Payslips"] },
  ],
  Student: [
    { section: "Home", items: ["Dashboard"] },
    { section: "Academics", items: ["My Schedule", "My Results", "Learning Materials"] },
    { section: "Finance", items: ["My Fees & Payments"] },
    { section: "Other", items: ["Attendance Record", "Messages"] },
  ],
  Parent: [
    { section: "Home", items: ["Overview"] },
    { section: "My Child", items: ["Progress & Grades", "Attendance", "Class Schedule"] },
    { section: "Finance", items: ["Fees & Payments"] },
    { section: "Communicate", items: ["Messages", "Announcements"] },
  ],
};

function Sidebar({ role, active, onNav }) {
  const navItems = NAV[role] || [];
  return (
    <div style={{ width: 196, background: C.sidebar, height: "100%", display: "flex", flexDirection: "column", flexShrink: 0 }}>
      <div style={{ padding: "16px 14px 12px", borderBottom: "0.5px solid #ffffff14" }}>
        <div style={{ fontSize: 13, fontWeight: 800, color: "#fff", letterSpacing: -0.3 }}>EduCentre</div>
        <div style={{ fontSize: 10, color: "#ffffff55", marginTop: 2 }}>Management System</div>
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
            <div style={{ fontSize: 11, fontWeight: 600, color: "#fff" }}>Admin User</div>
            <div style={{ fontSize: 10, color: "#ffffff55" }}>{role}</div>
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
  return (
    <div style={{ padding: 18, display: "flex", flexDirection: "column", gap: 14 }}>
      <div style={{ display: "flex", gap: 10 }}>
        <Stat value="247" label="Active Students" sub="↑ 12 this month" color={C.blue} icon="🎓" />
        <Stat value="RM 18,400" label="Revenue (Oct)" sub="↑ 8% vs Sep" color={C.green} icon="💰" />
        <Stat value="34" label="Active Classes" sub="6 rooms today" color={C.purple} icon="📅" />
        <Stat value="RM 3,200" label="Outstanding Fees" sub="11 invoices overdue" color={C.red} icon="⚠️" />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 12 }}>
        <Card>
          <CardTitle text="Monthly Revenue (2024)" />
          <MiniBar values={[8200, 9800, 11200, 10400, 14000, 13200, 15800, 16200, 17100, 18400, 0, 0]} h={90} />
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>
            {["J","F","M","A","M","J","J","A","S","O","N","D"].map(m => <span key={m} style={{ fontSize: 9, color: C.hint }}>{m}</span>)}
          </div>
        </Card>
        <Card>
          <CardTitle text="Today's Classes" action="View all" />
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
          <CardTitle text="Recent Enrollments" action="View all" />
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
                <Badge text={status === "green" ? "Confirmed" : "Pending"} color={status} />
              </div>
            </div>
          ))}
        </Card>
        <Card>
          <CardTitle text="Overdue Payments" action="Send all reminders" />
          {[
            ["Ahmad Ridzwan", "RM 280", "14 days"],
            ["Zulaikha bt Aziz", "RM 560", "21 days"],
            ["Iqbal Hakim", "RM 140", "7 days"],
            ["Maisarah Yusof", "RM 420", "30 days"],
          ].map(([name, amount, days], i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "7px 0", borderBottom: i < 3 ? `0.5px solid ${C.border}` : "none" }}>
              <Avatar name={name} size={30} color={C.red} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: C.text }}>{name}</div>
                <div style={{ fontSize: 11, color: C.red }}>{days} overdue</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: C.red }}>{amount}</div>
                <button style={{ fontSize: 10, color: C.blue, background: "none", border: "none", cursor: "pointer", padding: 0 }}>Remind →</button>
              </div>
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
}

function StudentManagement() {
  return (
    <div style={{ padding: 18, display: "flex", flexDirection: "column", gap: 14 }}>
      <div style={{ display: "flex", gap: 10 }}>
        <Stat value="247" label="Total Students" color={C.blue} icon="👥" />
        <Stat value="231" label="Active" sub="93.5% of total" color={C.green} icon="✅" />
        <Stat value="12" label="Enrolled This Month" color={C.purple} icon="📝" />
        <Stat value="4" label="Pending Approval" color={C.amber} icon="⏳" />
      </div>
      <Card p={0}>
        <div style={{ padding: "12px 14px", display: "flex", alignItems: "center", gap: 8, borderBottom: `0.5px solid ${C.border}` }}>
          <Input placeholder="🔍  Search student name, ID, or phone..." style={{ flex: 1 }} />
          <Select label="All Classes" />
          <Select label="All Status" />
          <Btn label="+ Add Student" primary />
          <Btn label="Import CSV" outline />
        </div>
        <TableHead cols={[{label:"Student", w:"2fr"},{label:"Student ID", w:"1fr"},{label:"Class", w:"1fr"},{label:"Enrolled", w:"1fr"},{label:"Fee Status", w:"1fr"},{label:"Status", w:"0.7fr"},{label:"", w:"0.6fr"}]} />
        {[
          ["Aiman Haziq bin Rosli", "SC-2024-001", "Math Yr 5 · English Yr 3", "15 Jan 2024", "Paid", "Active"],
          ["Nurul Ain binti Khalid", "SC-2024-002", "BM Yr 4 · Science Yr 4", "20 Jan 2024", "Paid", "Active"],
          ["Farhan Izzat Mokhtar", "SC-2024-047", "Science Yr 6", "3 Feb 2024", "Overdue", "Active"],
          ["Siti Hajar bt Azman", "SC-2024-089", "Math Yr 6 · English Yr 6", "10 Mar 2024", "Paid", "Active"],
          ["Izzuddin Hafizuddin", "SC-2024-112", "BM Yr 5", "1 Apr 2024", "Pending", "Inactive"],
          ["Khairul Amirul Hazim", "SC-2024-130", "Math Yr 3", "22 May 2024", "Paid", "Active"],
        ].map(([name, id, classes, enrolled, fee, status], i, arr) => (
          <TableRow key={i} last={i === arr.length - 1} cols={[{w:"2fr"},{w:"1fr"},{w:"1fr"},{w:"1fr"},{w:"1fr"},{w:"0.7fr"},{w:"0.6fr"}]} values={[
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}><Avatar name={name} size={26} /><span style={{ fontWeight: 600 }}>{name}</span></div>,
            <span style={{ color: C.muted, fontFamily: "monospace", fontSize: 11 }}>{id}</span>,
            <span style={{ color: C.muted, fontSize: 11 }}>{classes}</span>,
            <span style={{ color: C.muted, fontSize: 11 }}>{enrolled}</span>,
            <Badge text={fee} color={fee==="Paid"?"green":fee==="Overdue"?"red":"amber"} />,
            <Badge text={status} color={status==="Active"?"green":"gray"} />,
            <div style={{ display: "flex", gap: 4 }}><Btn label="View" sm outline /><Btn label="Edit" sm outline /></div>,
          ]} />
        ))}
        <div style={{ padding: "10px 14px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 11, color: C.muted }}>Showing 1–6 of 247 students</span>
          <div style={{ display: "flex", gap: 4 }}>
            {["←","1","2","3","...","42","→"].map((p, i) => (
              <button key={i} style={{ width: 28, height: 28, borderRadius: 6, border: `0.5px solid ${p==="1"?C.blue:C.border}`, background: p==="1"?C.blue:"transparent", color: p==="1"?"#fff":C.muted, fontSize: 11, cursor: "pointer" }}>{p}</button>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}

function StudentProfile() {
  const [tab, setTab] = useState("Enrollment");
  return (
    <div style={{ padding: 18, display: "flex", gap: 14 }}>
      <div style={{ width: 240, display: "flex", flexDirection: "column", gap: 12 }}>
        <Card>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, paddingBottom: 14, borderBottom: `0.5px solid ${C.border}`, marginBottom: 14 }}>
            <div style={{ width: 70, height: 70, borderRadius: "50%", background: C.blue + "22", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, fontWeight: 800, color: C.blue }}>AH</div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: C.text }}>Aiman Haziq bin Rosli</div>
              <div style={{ fontSize: 11, color: C.muted, marginTop: 1 }}>SC-2024-001</div>
              <Badge text="Active" color="green" />
            </div>
          </div>
          {[["Date of Birth","12 March 2012"],["Age","12 years"],["IC Number","120312-14-XXXX"],["Gender","Male"],["Phone","012-345 6789"],["Email","aiman@email.com"]].map(([k,v]) => (
            <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "5px 0", borderBottom: `0.5px solid ${C.border}` }}>
              <span style={{ fontSize: 11, color: C.hint }}>{k}</span>
              <span style={{ fontSize: 11, color: C.text, fontWeight: 500 }}>{v}</span>
            </div>
          ))}
        </Card>
        <Card>
          <CardTitle text="Parent / Guardian" />
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Avatar name="Rosli Bin Ahmad" size={30} color={C.green} />
            <div>
              <div style={{ fontSize: 12, fontWeight: 600, color: C.text }}>Rosli bin Ahmad</div>
              <div style={{ fontSize: 11, color: C.muted }}>Father · 013-456 7890</div>
            </div>
          </div>
        </Card>
        <Card>
          <CardTitle text="Quick Actions" />
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <Btn label="📩  Send Message" outline style={{ width: "100%", justifyContent: "flex-start" }} />
            <Btn label="🧾  Create Invoice" outline style={{ width: "100%", justifyContent: "flex-start" }} />
            <Btn label="📋  Generate Report Card" outline style={{ width: "100%", justifyContent: "flex-start" }} />
            <Btn label="⛔  Suspend Student" danger style={{ width: "100%", justifyContent: "flex-start" }} />
          </div>
        </Card>
      </div>
      <div style={{ flex: 1 }}>
        <Card>
          <div style={{ display: "flex", gap: 4, marginBottom: 14, borderBottom: `0.5px solid ${C.border}`, paddingBottom: 10 }}>
            {["Enrollment","Attendance","Results","Fees","Documents"].map(t => (
              <button key={t} onClick={() => setTab(t)} style={{ padding: "6px 14px", fontSize: 12, fontWeight: tab===t?700:400, borderRadius: 7, border: "none", background: tab===t?C.blue+"18":"transparent", color: tab===t?C.blue:C.muted, cursor: "pointer" }}>{t}</button>
            ))}
          </div>
          {tab === "Enrollment" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { name: "Mathematics Year 5", teacher: "Ustazah Nor Hidayah", schedule: "Mon, Wed · 8:00–9:30 AM", room: "Room A", fee: "RM 120/month", since: "15 Jan 2024", status: "Active" },
                { name: "English Year 3", teacher: "Mr. Fariz Abdullah", schedule: "Tue, Thu · 10:00–11:30 AM", room: "Room B", fee: "RM 100/month", since: "15 Jan 2024", status: "Active" },
                { name: "Science Year 5", teacher: "Cik Laila bt Hamid", schedule: "Sat · 9:00–11:00 AM", room: "Lab 1", fee: "RM 130/month", since: "3 Mar 2024", status: "Completed" },
              ].map((e, i) => (
                <div key={i} style={{ border: `0.5px solid ${C.border}`, borderRadius: 8, padding: 12 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: C.text }}>{e.name}</div>
                      <div style={{ fontSize: 11, color: C.muted, marginTop: 2 }}>👩‍🏫 {e.teacher} · 📍 {e.room}</div>
                      <div style={{ fontSize: 11, color: C.muted }}>🕐 {e.schedule}</div>
                    </div>
                    <Badge text={e.status} color={e.status === "Active" ? "green" : "gray"} />
                  </div>
                  <Divider />
                  <div style={{ display: "flex", gap: 16 }}>
                    <span style={{ fontSize: 11, color: C.muted }}>Fee: <strong style={{ color: C.text }}>{e.fee}</strong></span>
                    <span style={{ fontSize: 11, color: C.muted }}>Since: <strong style={{ color: C.text }}>{e.since}</strong></span>
                  </div>
                </div>
              ))}
            </div>
          )}
          {tab === "Attendance" && (
            <div>
              <div style={{ display: "flex", gap: 10, marginBottom: 12 }}>
                <Stat value="92%" label="Overall Attendance" color={C.green} />
                <Stat value="47/51" label="Sessions Attended" color={C.blue} />
                <Stat value="4" label="Absences" color={C.red} />
                <Stat value="2" label="Late" color={C.amber} />
              </div>
              <TableHead cols={[{label:"Date"},{label:"Class"},{label:"Status"},{label:"Note"}]} />
              {[
                ["28 Oct, Mon","Math Yr 5","Present",""],
                ["26 Oct, Sat","Science Yr 5","Present",""],
                ["24 Oct, Thu","English Yr 3","Late","Arrived 15 min late"],
                ["22 Oct, Tue","English Yr 3","Present",""],
                ["21 Oct, Mon","Math Yr 5","Absent","MC submitted"],
              ].map(([date,cls,status,note],i,arr) => (
                <TableRow key={i} last={i===arr.length-1} cols={[{},{},{},{}]} values={[
                  <span style={{fontSize:11,color:C.muted}}>{date}</span>,
                  <span style={{fontSize:12,fontWeight:500}}>{cls}</span>,
                  <Badge text={status} color={status==="Present"?"green":status==="Absent"?"red":"amber"} />,
                  <span style={{fontSize:11,color:C.muted}}>{note}</span>,
                ]} />
              ))}
            </div>
          )}
          {tab === "Results" && (
            <div>
              {[{subject:"Mathematics Year 5", avg:"87%"},{subject:"English Year 3",avg:"79%"}].map((sub,si)=>(
                <div key={si} style={{ marginBottom: 14 }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: C.text, marginBottom: 8 }}>{sub.subject} — Average: <span style={{ color: C.green }}>{sub.avg}</span></div>
                  <TableHead cols={[{label:"Assessment"},{label:"Date"},{label:"Score"},{label:"Grade"},{label:"Remark"}]} />
                  {[["Mid-Year Test","15 Jun","84/100","B+","Good effort"],["Quiz 1","20 Jul","18/20","A","Excellent"],["Assignment","10 Aug","46/50","A-","Well done"]].map(([a,d,s,g,r],i,arr)=>(
                    <TableRow key={i} last={i===arr.length-1} cols={[{},{},{},{},{}]} values={[
                      <span style={{fontWeight:500}}>{a}</span>,
                      <span style={{fontSize:11,color:C.muted}}>{d}</span>,
                      <span style={{fontWeight:600,color:C.blue}}>{s}</span>,
                      <Badge text={g} color="green" />,
                      <span style={{fontSize:11,color:C.muted}}>{r}</span>,
                    ]} />
                  ))}
                </div>
              ))}
            </div>
          )}
          {tab === "Fees" && (
            <div>
              <div style={{ display: "flex", gap: 10, marginBottom: 12 }}>
                <Stat value="RM 1,640" label="Total Paid (2024)" color={C.green} />
                <Stat value="RM 220" label="Outstanding" color={C.red} />
                <Stat value="RM 0" label="Overdue" color={C.muted} />
              </div>
              <TableHead cols={[{label:"Invoice"},{label:"Description"},{label:"Amount"},{label:"Due Date"},{label:"Status"},{label:""}]} />
              {[
                ["INV-2024-089","Oct Tuition — Math Yr 5","RM 120","31 Oct 2024","Unpaid"],
                ["INV-2024-088","Oct Tuition — English Yr 3","RM 100","31 Oct 2024","Unpaid"],
                ["INV-2024-071","Sep Tuition — Math Yr 5","RM 120","30 Sep 2024","Paid"],
                ["INV-2024-070","Sep Tuition — English Yr 3","RM 100","30 Sep 2024","Paid"],
              ].map(([inv,desc,amt,due,status],i,arr)=>(
                <TableRow key={i} last={i===arr.length-1} cols={[{},{},{},{},{},{}]} values={[
                  <span style={{fontSize:11,fontFamily:"monospace",color:C.muted}}>{inv}</span>,
                  <span style={{fontSize:12}}>{desc}</span>,
                  <span style={{fontWeight:600}}>{amt}</span>,
                  <span style={{fontSize:11,color:C.muted}}>{due}</span>,
                  <Badge text={status} color={status==="Paid"?"green":"amber"} />,
                  status==="Unpaid"?<Btn label="Pay Now" sm primary />:<Btn label="Receipt" sm outline />,
                ]} />
              ))}
            </div>
          )}
          {tab === "Documents" && (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {[["IC Copy","PDF · 245 KB · Jan 2024"],["Birth Certificate","PDF · 312 KB · Jan 2024"],["Health Form","PDF · 78 KB · Jan 2024"],["Consent Letter","PDF · 56 KB · Mar 2024"]].map(([name,meta])=>(
                <div key={name} style={{ border:`0.5px solid ${C.border}`, borderRadius:8, padding:12, display:"flex", alignItems:"center", gap:10 }}>
                  <div style={{ fontSize:24 }}>📄</div>
                  <div style={{ flex:1 }}>
                    <div style={{ fontSize:12, fontWeight:600, color:C.text }}>{name}</div>
                    <div style={{ fontSize:10, color:C.hint }}>{meta}</div>
                  </div>
                  <button style={{ fontSize:11, color:C.blue, background:"none", border:"none", cursor:"pointer" }}>↓</button>
                </div>
              ))}
              <div style={{ border:`1.5px dashed ${C.border}`, borderRadius:8, padding:12, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:4, cursor:"pointer" }}>
                <div style={{ fontSize:24 }}>📎</div>
                <div style={{ fontSize:11, color:C.muted }}>Upload document</div>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}

function ClassSchedule() {
  const days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const times = ["8:00","9:00","10:00","11:00","12:00","1:00","2:00","3:00","4:00","5:00"];
  const classes = [
    { day:0, start:0, span:2, name:"Math Yr 5", room:"Room A", teacher:"Ustazah Nor", color:"#3b82f620", border:C.blue },
    { day:1, start:2, span:2, name:"English Yr 3", room:"Room B", teacher:"Mr. Fariz", color:"#10b98120", border:C.green },
    { day:2, start:0, span:2, name:"Math Yr 5", room:"Room A", teacher:"Ustazah Nor", color:"#3b82f620", border:C.blue },
    { day:2, start:3, span:2, name:"BM Yr 4", room:"Room C", teacher:"En. Halim", color:"#7c3aed20", border:C.purple },
    { day:3, start:2, span:2, name:"English Yr 3", room:"Room B", teacher:"Mr. Fariz", color:"#10b98120", border:C.green },
    { day:3, start:5, span:2, name:"Science Yr 6", room:"Lab 1", teacher:"Cik Laila", color:"#f59e0b20", border:C.amber },
    { day:4, start:3, span:2, name:"BM Yr 6", room:"Room C", teacher:"En. Halim", color:"#7c3aed20", border:C.purple },
    { day:5, start:1, span:3, name:"Math Yr 6 (Weekend)", room:"Room A", teacher:"Ustazah Nor", color:"#3b82f620", border:C.blue },
    { day:5, start:1, span:3, name:"Science Yr 5", room:"Lab 1", teacher:"Cik Laila", color:"#f59e0b20", border:C.amber },
  ];
  const cellH = 44;
  return (
    <div style={{ padding: 18 }}>
      <div style={{ display:"flex", gap:8, marginBottom:14 }}>
        <Select label="All Classes" /><Select label="All Educators" /><Select label="All Rooms" />
        <div style={{ flex:1 }} />
        <Btn label="Week" primary sm /><Btn label="Day" sm outline /><Btn label="Month" sm outline />
        <Btn label="+ New Class" primary />
      </div>
      <Card p={0}>
        <div style={{ display:"grid", gridTemplateColumns:`70px ${days.map(()=>"1fr").join(" ")}`, borderBottom:`0.5px solid ${C.border}` }}>
          <div style={{ padding:"10px 8px", borderRight:`0.5px solid ${C.border}` }} />
          {days.map(d => (
            <div key={d} style={{ padding:"10px 8px", textAlign:"center", fontSize:12, fontWeight:700, color:C.text, borderRight:`0.5px solid ${C.border}` }}>
              {d.slice(0,3)}<div style={{ fontSize:10, color:C.hint, fontWeight:400 }}>{d === "Monday" ? "28 Oct" : d==="Tuesday"?"29 Oct":d==="Wednesday"?"30 Oct":d==="Thursday"?"31 Oct":d==="Friday"?"1 Nov":d==="Saturday"?"2 Nov":""}</div>
            </div>
          ))}
        </div>
        <div style={{ position:"relative" }}>
          {times.map((t, ti) => (
            <div key={t} style={{ display:"grid", gridTemplateColumns:`70px ${days.map(()=>"1fr").join(" ")}`, height:cellH }}>
              <div style={{ fontSize:10, color:C.hint, padding:"4px 8px", borderRight:`0.5px solid ${C.border}`, paddingTop:6 }}>{t}</div>
              {days.map((d, di) => (
                <div key={di} style={{ borderRight:`0.5px solid ${C.border}`, borderBottom:`0.5px solid ${C.border}8` }} />
              ))}
            </div>
          ))}
          {/* Class blocks */}
          {classes.map((cls, i) => (
            <div key={i} style={{
              position:"absolute",
              left:`calc(70px + (100% - 70px) * ${cls.day} / 6 + 3px)`,
              top: cls.start * cellH + 2,
              width:`calc((100% - 70px) / 6 - 6px)`,
              height: cls.span * cellH - 4,
              background: cls.color, border:`1.5px solid ${cls.border}`,
              borderRadius:6, padding:"4px 6px", overflow:"hidden", cursor:"pointer",
            }}>
              <div style={{ fontSize:11, fontWeight:700, color:cls.border }}>{cls.name}</div>
              <div style={{ fontSize:10, color:C.muted }}>{cls.room}</div>
              <div style={{ fontSize:10, color:C.muted }}>{cls.teacher}</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

function FeePayments() {
  return (
    <div style={{ padding:18, display:"flex", flexDirection:"column", gap:14 }}>
      <div style={{ display:"flex", gap:10 }}>
        <Stat value="RM 18,400" label="Collected (Oct)" sub="↑ 8% vs Sep" color={C.green} icon="💰" />
        <Stat value="RM 3,200" label="Outstanding" sub="22 unpaid invoices" color={C.amber} icon="⏳" />
        <Stat value="RM 1,600" label="Overdue" sub="11 invoices 30+ days" color={C.red} icon="⚠️" />
        <Stat value="89%" label="Collection Rate" sub="Oct 2024" color={C.blue} icon="📊" />
      </div>
      <Card p={0}>
        <div style={{ padding:"12px 14px", display:"flex", gap:8, borderBottom:`0.5px solid ${C.border}`, alignItems:"center" }}>
          <Input placeholder="🔍  Search by student, invoice number..." style={{ flex:1 }} />
          <Select label="All Status" /><Select label="Oct 2024" />
          <Btn label="+ New Invoice" primary /><Btn label="Export" outline />
        </div>
        <TableHead cols={[{label:"Invoice"},{label:"Student"},{label:"Description"},{label:"Amount"},{label:"Due Date"},{label:"Status"},{label:"Action"}]} />
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
            <div style={{ display:"flex", alignItems:"center", gap:6 }}><Avatar name={student} size={22} /><span style={{fontWeight:600}}>{student}</span></div>,
            <span style={{fontSize:11,color:C.muted}}>{desc}</span>,
            <span style={{fontWeight:700}}>{amt}</span>,
            <span style={{fontSize:11,color:status==="Overdue"?C.red:C.muted}}>{due}</span>,
            <Badge text={status} color={status==="Paid"?"green":status==="Overdue"?"red":status==="Partial"?"amber":"gray"} />,
            <div style={{ display:"flex", gap:4 }}>
              {status==="Unpaid"&&<Btn label="Record" sm primary />}
              {status==="Overdue"&&<Btn label="Remind" sm danger />}
              {status==="Paid"&&<Btn label="Receipt" sm outline />}
              {status==="Partial"&&<Btn label="Update" sm outline />}
            </div>,
          ]} />
        ))}
      </Card>
    </div>
  );
}

function Enrollment() {
  const [step, setStep] = useState(1);
  return (
    <div style={{ padding:18 }}>
      <div style={{ display:"flex", alignItems:"center", gap:0, marginBottom:20 }}>
        {[["1","Student Info"],["2","Select Courses"],["3","Fee Plan"],["4","Confirm"]].map(([n,label],i)=>(
          <div key={n} style={{ display:"flex", alignItems:"center" }}>
            <div style={{ display:"flex", alignItems:"center", gap:8, cursor:"pointer" }} onClick={()=>setStep(i+1)}>
              <div style={{ width:28, height:28, borderRadius:"50%", background:step>i?C.blue:step===i+1?C.blue:"#e2e8f0", display:"flex", alignItems:"center", justifyContent:"center", fontSize:12, fontWeight:700, color:step>=i+1?"#fff":C.hint }}>{step>i+1?"✓":n}</div>
              <span style={{ fontSize:12, fontWeight:step===i+1?700:400, color:step>=i+1?C.text:C.hint }}>{label}</span>
            </div>
            {i<3&&<div style={{ width:40, height:2, background:step>i+1?C.blue:C.border, margin:"0 8px" }} />}
          </div>
        ))}
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 340px", gap:14 }}>
        <Card>
          {step===1&&(
            <div>
              <div style={{ fontSize:14, fontWeight:700, marginBottom:16 }}>Student Information</div>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginBottom:12 }}>
                {[["Full Name (as per IC)"],["IC / Passport Number"],["Date of Birth"],["Gender"],["School"],["School Year/Level"]].map(([l])=>(
                  <div key={l}><Label text={l} /><Input placeholder={`Enter ${l.toLowerCase()}`} /></div>
                ))}
              </div>
              <Label text="Home Address" /><Input placeholder="Full address" style={{ marginBottom:12 }} />
              <div style={{ fontSize:13, fontWeight:700, margin:"16px 0 12px" }}>Parent / Guardian</div>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginBottom:12 }}>
                {[["Parent / Guardian Name"],["Relationship"],["Phone Number"],["Email Address"]].map(([l])=>(
                  <div key={l}><Label text={l} /><Input placeholder={`Enter ${l.toLowerCase()}`} /></div>
                ))}
              </div>
              <div style={{ display:"flex", justifyContent:"flex-end" }}><Btn label="Next: Select Courses →" primary onClick={()=>setStep(2)} /></div>
            </div>
          )}
          {step===2&&(
            <div>
              <div style={{ fontSize:14, fontWeight:700, marginBottom:16 }}>Available Courses</div>
              <Input placeholder="🔍  Search courses..." style={{ marginBottom:12 }} />
              {[
                { name:"Mathematics Year 5", teacher:"Ustazah Nor Hidayah", schedule:"Mon & Wed · 8:00–9:30 AM", room:"Room A", fee:"RM 120/month", spots:2, selected:true },
                { name:"English Year 3", teacher:"Mr. Fariz Abdullah", schedule:"Tue & Thu · 10:00–11:30 AM", room:"Room B", fee:"RM 100/month", spots:8, selected:false },
                { name:"Science Year 5", teacher:"Cik Laila bt Hamid", schedule:"Sat · 9:00–11:00 AM", room:"Lab 1", fee:"RM 130/month", spots:0, selected:false },
                { name:"BM Year 4", teacher:"En. Halim Hashim", schedule:"Wed · 2:00–3:30 PM", room:"Room C", fee:"RM 100/month", spots:4, selected:false },
              ].map((c,i)=>(
                <div key={i} style={{ border:`1.5px solid ${c.selected?C.blue:C.border}`, borderRadius:8, padding:12, marginBottom:8, background:c.selected?C.blue+"08":"#fff", opacity:c.spots===0?0.5:1 }}>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
                    <div>
                      <div style={{ fontSize:13, fontWeight:700, color:C.text }}>{c.name}</div>
                      <div style={{ fontSize:11, color:C.muted }}>👩‍🏫 {c.teacher} · 🕐 {c.schedule} · 📍 {c.room}</div>
                    </div>
                    <div style={{ textAlign:"right" }}>
                      <div style={{ fontSize:13, fontWeight:700, color:C.blue }}>{c.fee}</div>
                      {c.spots===0?<Badge text="Full" color="red" />:<Badge text={`${c.spots} spots left`} color="green" />}
                    </div>
                  </div>
                  {c.spots>0&&<div style={{ marginTop:8 }}><input type="checkbox" defaultChecked={c.selected} readOnly /><span style={{ fontSize:11, marginLeft:6, color:C.muted }}>Enroll in this course</span></div>}
                </div>
              ))}
              <div style={{ display:"flex", justifyContent:"space-between" }}>
                <Btn label="← Back" outline onClick={()=>setStep(1)} />
                <Btn label="Next: Fee Plan →" primary onClick={()=>setStep(3)} />
              </div>
            </div>
          )}
          {step===3&&(
            <div>
              <div style={{ fontSize:14, fontWeight:700, marginBottom:16 }}>Fee Plan & Discounts</div>
              <Card style={{ background:"#f8fafc", marginBottom:14 }}>
                <div style={{ fontSize:12, fontWeight:700, marginBottom:8 }}>Selected Courses</div>
                {[["Mathematics Year 5","RM 120/month"],["English Year 3","RM 100/month"]].map(([name,fee])=>(
                  <div key={name} style={{ display:"flex", justifyContent:"space-between", padding:"6px 0", borderBottom:`0.5px solid ${C.border}` }}>
                    <span style={{ fontSize:12 }}>{name}</span><span style={{ fontSize:12, fontWeight:600 }}>{fee}</span>
                  </div>
                ))}
                <div style={{ display:"flex", justifyContent:"space-between", padding:"8px 0 0" }}>
                  <span style={{ fontSize:13, fontWeight:700 }}>Total per month</span>
                  <span style={{ fontSize:13, fontWeight:700, color:C.blue }}>RM 220</span>
                </div>
              </Card>
              <Label text="Discount / Promo Code" /><div style={{ display:"flex", gap:8, marginBottom:12 }}><Input placeholder="Enter promo code" /><Btn label="Apply" outline /></div>
              <Label text="Registration Fee" /><Input placeholder="RM 50 (one-time)" style={{ marginBottom:12 }} />
              <Label text="Payment Start Date" /><Input placeholder="Nov 2024" style={{ marginBottom:12 }} />
              <Label text="Billing Cycle" /><Select label="Monthly (auto-generate invoice on 1st)" />
              <div style={{ display:"flex", justifyContent:"space-between", marginTop:16 }}>
                <Btn label="← Back" outline onClick={()=>setStep(2)} />
                <Btn label="Next: Confirm →" primary onClick={()=>setStep(4)} />
              </div>
            </div>
          )}
          {step===4&&(
            <div>
              <div style={{ fontSize:14, fontWeight:700, marginBottom:16 }}>Confirm Enrollment</div>
              <div style={{ background:"#f0fdf4", border:`0.5px solid ${C.green}`, borderRadius:8, padding:14, marginBottom:14 }}>
                <div style={{ fontSize:12, fontWeight:700, color:C.green, marginBottom:8 }}>✅ Ready to confirm</div>
                {[["Student","Aiman Haziq bin Rosli (SC-2024-001)"],["Courses","Mathematics Year 5, English Year 3"],["Monthly Fee","RM 220/month"],["Registration Fee","RM 50 (one-time)"],["First Billing","November 2024"],["Confirmation","via WhatsApp & email"]].map(([k,v])=>(
                  <div key={k} style={{ display:"flex", gap:12, padding:"4px 0", fontSize:12 }}>
                    <span style={{ color:C.muted, width:120, flexShrink:0 }}>{k}</span>
                    <span style={{ fontWeight:500, color:C.text }}>{v}</span>
                  </div>
                ))}
              </div>
              <div style={{ display:"flex", justifyContent:"space-between" }}>
                <Btn label="← Back" outline onClick={()=>setStep(3)} />
                <Btn label="✅ Confirm Enrollment" primary style={{ background:C.green }} />
              </div>
            </div>
          )}
        </Card>
        <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
          <Card>
            <CardTitle text="Enrollment Progress" />
            <div style={{ fontSize:12, color:C.muted }}>Completing step {step} of 4</div>
            <div style={{ marginTop:8, height:6, background:C.ph, borderRadius:3 }}>
              <div style={{ height:"100%", width:`${step*25}%`, background:C.blue, borderRadius:3, transition:"width .3s" }} />
            </div>
          </Card>
          <Card>
            <CardTitle text="Tips" />
            {["Ensure student IC number is correct — it cannot be changed after confirmation.","Students can be enrolled in multiple courses simultaneously.","A welcome message will be auto-sent to the parent via WhatsApp after confirmation."].map((t,i)=>(
              <div key={i} style={{ display:"flex", gap:6, marginBottom:8 }}>
                <span style={{ color:C.blue, flexShrink:0 }}>•</span>
                <span style={{ fontSize:11, color:C.muted, lineHeight:1.5 }}>{t}</span>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </div>
  );
}

function MarkAttendance() {
  const [marks, setMarks] = useState({});
  const students = ["Aiman Haziq","Nurul Ain","Farhan Izzat","Siti Hajar","Izzuddin","Khairul Amirul","Maisarah Yusof","Ahmad Ridzwan","Zulaikha Aziz","Iqbal Hakim"];
  const statuses = ["Present","Late","Absent","Excused"];
  const statusColors = { Present:"green", Late:"amber", Absent:"red", Excused:"gray" };
  const toggle = (name, s) => setMarks(m => ({ ...m, [name]: s }));
  const counts = Object.values(marks).reduce((acc, s) => ({ ...acc, [s]: (acc[s]||0)+1 }), {});
  return (
    <div style={{ padding:18 }}>
      <div style={{ display:"flex", gap:10, marginBottom:14, alignItems:"center", flexWrap:"wrap" }}>
        <Select label="Mathematics Year 5" /><Select label="28 Oct 2024, Monday" /><Select label="8:00–9:30 AM" />
        <div style={{ flex:1 }} />
        <div style={{ display:"flex", gap:10 }}>
          {statuses.map(s => <div key={s} style={{ fontSize:11, color:C.muted }}><span style={{ fontWeight:700, color:C.text }}>{counts[s]||0}</span> {s}</div>)}
        </div>
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
        {students.map((name, i) => {
          const status = marks[name] || null;
          return (
            <Card key={i} style={{ display:"flex", alignItems:"center", gap:12, padding:"10px 14px" }}>
              <Avatar name={name} size={34} color={status?({Present:C.green,Late:C.amber,Absent:C.red,Excused:C.muted}[status]):C.hint} />
              <div style={{ flex:1 }}>
                <div style={{ fontSize:12, fontWeight:600, color:C.text }}>{name}</div>
                <div style={{ fontSize:10, color:C.hint }}>SC-2024-{String(i+1).padStart(3,"0")}</div>
              </div>
              <div style={{ display:"flex", gap:4 }}>
                {statuses.map(s => (
                  <button key={s} onClick={() => toggle(name, s)} style={{ padding:"4px 8px", fontSize:10, fontWeight:600, borderRadius:6, border:`1px solid ${status===s?({Present:C.green,Late:C.amber,Absent:C.red,Excused:C.muted}[s]):C.border}`, background:status===s?({Present:"#dcfce7",Late:"#fef3c7",Absent:"#fee2e2",Excused:"#f1f5f9"}[s]):"transparent", color:status===s?({Present:C.green,Late:C.amber,Absent:C.red,Excused:C.muted}[s]):C.hint, cursor:"pointer" }}>
                    {s[0]}
                  </button>
                ))}
              </div>
            </Card>
          );
        })}
      </div>
      <div style={{ display:"flex", justifyContent:"flex-end", gap:8, marginTop:14 }}>
        <Btn label="Save Draft" outline />
        <Btn label="Submit Attendance" primary style={{ background:C.green }} />
      </div>
    </div>
  );
}

function EnterGrades() {
  return (
    <div style={{ padding:18 }}>
      <div style={{ display:"flex", gap:8, marginBottom:14 }}>
        <Select label="Mathematics Year 5" /><Select label="Mid-Year Examination" /><Select label="Oct 2024" />
        <div style={{ flex:1 }} />
        <Btn label="+ New Assessment" primary />
      </div>
      <Card p={0}>
        <div style={{ padding:"10px 14px", borderBottom:`0.5px solid ${C.border}`, display:"flex", justifyContent:"space-between", alignItems:"center" }}>
          <div style={{ fontSize:12, color:C.muted }}>Max Score: <strong style={{ color:C.text }}>100</strong> · Pass Mark: <strong style={{ color:C.text }}>50</strong> · 10 students</div>
          <div style={{ display:"flex", gap:8 }}>
            <Btn label="Import Scores (Excel)" outline sm /><Btn label="Save All" primary sm />
          </div>
        </div>
        <TableHead cols={[{label:"#",w:"30px"},{label:"Student"},{label:"Score /100",w:"130px"},{label:"Grade",w:"80px"},{label:"Remark",w:"180px"},{label:"Status",w:"90px"}]} />
        {[
          ["Aiman Haziq","84","B+","Good effort, well done!","Pass"],
          ["Nurul Ain","92","A","Excellent performance","Pass"],
          ["Farhan Izzat","61","C+","Needs improvement in algebra","Pass"],
          ["Siti Hajar","78","B","Good, keep it up","Pass"],
          ["Izzuddin Hafiz","45","F","Needs extra support, please see me","Fail"],
          ["Khairul Amirul","71","B-","Consistent effort shown","Pass"],
          ["Maisarah Yusof","88","A-","Very good work","Pass"],
          ["Ahmad Ridzwan","","","","—"],
        ].map(([name,score,grade,remark,status],i,arr)=>(
          <TableRow key={i} last={i===arr.length-1} cols={[{w:"30px"},{},{w:"130px"},{w:"80px"},{w:"180px"},{w:"90px"}]} values={[
            <span style={{fontSize:11,color:C.hint}}>{i+1}</span>,
            <div style={{ display:"flex", alignItems:"center", gap:8 }}><Avatar name={name} size={24} /><span style={{fontWeight:600}}>{name}</span></div>,
            <input readOnly defaultValue={score} placeholder="–" style={{ width:70, padding:"4px 8px", fontSize:13, fontWeight:700, border:`0.5px solid ${C.border}`, borderRadius:6, textAlign:"center", color:C.blue }} />,
            <Badge text={grade||"–"} color={grade==="A"||grade==="A-"?"green":grade==="F"?"red":grade?"blue":"gray"} />,
            <input readOnly defaultValue={remark} placeholder="Add remark..." style={{ width:"100%", padding:"4px 6px", fontSize:11, border:`0.5px solid ${C.border}`, borderRadius:5, color:C.muted }} />,
            status==="–"?<span style={{fontSize:11,color:C.hint}}>—</span>:<Badge text={status} color={status==="Pass"?"green":"red"} />,
          ]} />
        ))}
      </Card>
    </div>
  );
}

function ParentDashboard() {
  return (
    <div style={{ padding:18, display:"flex", flexDirection:"column", gap:14 }}>
      <div style={{ background:C.blue+"10", border:`0.5px solid ${C.blue}30`, borderRadius:10, padding:14, display:"flex", alignItems:"center", gap:14 }}>
        <Avatar name="Aiman Haziq" size={52} color={C.blue} />
        <div style={{ flex:1 }}>
          <div style={{ fontSize:16, fontWeight:800, color:C.text }}>Aiman Haziq bin Rosli</div>
          <div style={{ fontSize:12, color:C.muted }}>SC-2024-001 · Year 5 · 2 active courses</div>
          <div style={{ display:"flex", gap:6, marginTop:6 }}>
            <Badge text="Active" color="green" /><Badge text="Math Yr 5" color="blue" /><Badge text="English Yr 3" color="blue" />
          </div>
        </div>
        <div style={{ display:"flex", flexDirection:"column", gap:6 }}>
          <Btn label="📩  Message Educator" outline sm /><Btn label="💰  Pay Fees" primary sm />
        </div>
      </div>
      <div style={{ display:"flex", gap:10 }}>
        <Stat value="92%" label="Attendance Rate" sub="47 of 51 sessions" color={C.green} icon="✅" />
        <Stat value="85%" label="Average Grade" sub="B+ overall performance" color={C.blue} icon="📈" />
        <Stat value="RM 220" label="Outstanding Fees" sub="Due 31 Oct 2024" color={C.red} icon="💳" />
        <Stat value="2" label="Upcoming Classes" sub="Today, Mon 28 Oct" color={C.purple} icon="📅" />
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
        <Card>
          <CardTitle text="Today's Schedule" />
          {[
            ["8:00–9:30 AM","Mathematics Year 5","Room A","Ustazah Nor"],
            ["10:00–11:30 AM","English Year 3","Room B","Mr. Fariz"],
          ].map(([time,cls,room,teacher],i)=>(
            <div key={i} style={{ display:"flex", gap:10, padding:"8px 0", borderBottom:i<1?`0.5px solid ${C.border}`:"none" }}>
              <div style={{ width:82, flexShrink:0 }}>
                <div style={{ fontSize:10, color:C.hint }}>{time.split("–")[0]}</div>
                <div style={{ fontSize:10, color:C.hint }}>–{time.split("–")[1]}</div>
              </div>
              <div style={{ width:3, background:C.blue, borderRadius:2, flexShrink:0 }} />
              <div>
                <div style={{ fontSize:12, fontWeight:700, color:C.text }}>{cls}</div>
                <div style={{ fontSize:11, color:C.muted }}>{teacher} · {room}</div>
              </div>
            </div>
          ))}
        </Card>
        <Card>
          <CardTitle text="Latest Results" action="View all" />
          {[["Mathematics Mid-Year","84/100","B+","green"],["English Assignment","46/50","A-","green"],["Science Quiz","17/20","A","green"],["BM Test","61/80","B","blue"]].map(([name,score,grade,c],i)=>(
            <div key={i} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"6px 0", borderBottom:i<3?`0.5px solid ${C.border}`:"none" }}>
              <div><div style={{ fontSize:12, fontWeight:500 }}>{name}</div><div style={{ fontSize:11, color:C.muted }}>{score}</div></div>
              <Badge text={grade} color={c} />
            </div>
          ))}
        </Card>
        <Card>
          <CardTitle text="Attendance This Month" />
          <div style={{ display:"flex", gap:3, marginBottom:8 }}>
            {Array.from({length:20},(_,i)=><div key={i} style={{ flex:1, height:20, borderRadius:3, background:i===8||i===15?C.red:i===4?C.amber:C.green, opacity:0.7 }} />)}
          </div>
          <div style={{ display:"flex", gap:12, fontSize:11, color:C.muted }}>
            <span>🟢 Present: 17</span><span>🟡 Late: 1</span><span>🔴 Absent: 2</span>
          </div>
        </Card>
        <Card>
          <CardTitle text="Fee Statement" action="Pay now →" />
          {[["Oct Tuition — Math Yr 5","RM 120","Unpaid","amber"],["Oct Tuition — English Yr 3","RM 100","Unpaid","amber"],["Sep Tuition — Math Yr 5","RM 120","Paid","green"],["Sep Tuition — English Yr 3","RM 100","Paid","green"]].map(([desc,amt,status,c],i)=>(
            <div key={i} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"6px 0", borderBottom:i<3?`0.5px solid ${C.border}`:"none" }}>
              <div style={{ flex:1 }}><div style={{ fontSize:12 }}>{desc}</div></div>
              <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                <span style={{ fontSize:12, fontWeight:700 }}>{amt}</span>
                <Badge text={status} color={c} />
              </div>
            </div>
          ))}
          <div style={{ marginTop:10, padding:10, background:C.red+"10", borderRadius:7, display:"flex", justifyContent:"space-between", alignItems:"center" }}>
            <span style={{ fontSize:12, fontWeight:700, color:C.red }}>Total Outstanding: RM 220</span>
            <Btn label="Pay Now" primary sm style={{ background:C.green }} />
          </div>
        </Card>
      </div>
    </div>
  );
}

function StudentDashboard() {
  return (
    <div style={{ padding:18, display:"flex", flexDirection:"column", gap:14 }}>
      <div style={{ display:"flex", gap:10 }}>
        <Stat value="92%" label="My Attendance" color={C.green} icon="✅" />
        <Stat value="85%" label="Average Grade" color={C.blue} icon="📈" />
        <Stat value="2" label="Classes Today" color={C.purple} icon="📅" />
        <Stat value="RM 220" label="Outstanding Fees" color={C.red} icon="💳" />
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"1.5fr 1fr", gap:12 }}>
        <Card>
          <CardTitle text="My Schedule — Today, Mon 28 Oct" action="Full timetable →" />
          {[
            { time:"8:00 AM",end:"9:30 AM",name:"Mathematics Year 5",room:"Room A",teacher:"Ustazah Nor Hidayah",status:"Upcoming",color:C.blue },
            { time:"10:00 AM",end:"11:30 AM",name:"English Year 3",room:"Room B",teacher:"Mr. Fariz Abdullah",status:"Upcoming",color:C.green },
          ].map((c,i)=>(
            <div key={i} style={{ display:"flex", gap:12, padding:"10px 0", borderBottom:i<1?`0.5px solid ${C.border}`:"none" }}>
              <div style={{ width:3, background:c.color, borderRadius:2, flexShrink:0 }} />
              <div style={{ flex:1 }}>
                <div style={{ fontSize:13, fontWeight:700, color:C.text }}>{c.name}</div>
                <div style={{ fontSize:11, color:C.muted }}>👩‍🏫 {c.teacher} · 📍 {c.room}</div>
                <div style={{ fontSize:11, color:C.muted }}>🕐 {c.time} – {c.end}</div>
              </div>
              <Badge text={c.status} color="blue" />
            </div>
          ))}
        </Card>
        <Card>
          <CardTitle text="Recent Grades" action="View all →" />
          {[["Math Mid-Year","84/100","B+","green"],["English Assign.","46/50","A-","green"],["Science Quiz","17/20","A","green"],["BM Test","61/80","B","blue"]].map(([name,score,grade,c],i)=>(
            <div key={i} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"7px 0", borderBottom:i<3?`0.5px solid ${C.border}`:"none" }}>
              <div><div style={{ fontSize:12, fontWeight:500 }}>{name}</div><div style={{ fontSize:11, color:C.muted }}>{score}</div></div>
              <Badge text={grade} color={c} />
            </div>
          ))}
        </Card>
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
        <Card>
          <CardTitle text="Learning Materials" action="View all →" />
          {[["Math Yr 5 — Chapter 6 Notes","PDF · 2.4 MB · Uploaded 25 Oct","📄"],["English — Week 8 Slides","PPTX · 3.1 MB · Uploaded 22 Oct","📊"],["Science — Lab Report Template","DOCX · 180 KB · Uploaded 20 Oct","📝"]].map(([name,meta,icon])=>(
            <div key={name} style={{ display:"flex", alignItems:"center", gap:10, padding:"7px 0", borderBottom:`0.5px solid ${C.border}` }}>
              <span style={{ fontSize:20 }}>{icon}</span>
              <div style={{ flex:1 }}>
                <div style={{ fontSize:12, fontWeight:500, color:C.text }}>{name}</div>
                <div style={{ fontSize:10, color:C.hint }}>{meta}</div>
              </div>
              <button style={{ fontSize:12, color:C.blue, background:"none", border:"none", cursor:"pointer" }}>↓</button>
            </div>
          ))}
        </Card>
        <Card>
          <CardTitle text="My Fees" action="Pay →" />
          {[["Oct Tuition — Math Yr 5","RM 120","amber"],["Oct Tuition — English Yr 3","RM 100","amber"],["Sep Tuition — All","RM 220","green"]].map(([desc,amt,c],i)=>(
            <div key={i} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"7px 0", borderBottom:i<2?`0.5px solid ${C.border}`:"none" }}>
              <span style={{ fontSize:12, color:C.text }}>{desc}</span>
              <div style={{ display:"flex", alignItems:"center", gap:8 }}><span style={{ fontWeight:700 }}>{amt}</span><Badge text={c==="green"?"Paid":"Unpaid"} color={c} /></div>
            </div>
          ))}
          <div style={{ marginTop:10, padding:10, background:"#fef3c7", borderRadius:7 }}>
            <div style={{ fontSize:11, fontWeight:700, color:C.amber }}>⚠️ RM 220 due on 31 Oct 2024</div>
          </div>
        </Card>
      </div>
    </div>
  );
}

function Reports() {
  return (
    <div style={{ padding:18, display:"flex", gap:14 }}>
      <div style={{ width:200, display:"flex", flexDirection:"column", gap:6 }}>
        {["Revenue Report","Outstanding Fees","Enrollment Trends","Class Utilisation","Educator Workload","Student Retention","Attendance Summary","Academic Performance","P&L Summary"].map((r,i)=>(
          <div key={r} style={{ padding:"8px 12px", borderRadius:7, background:i===0?C.blue:"transparent", color:i===0?"#fff":C.muted, fontSize:12, fontWeight:i===0?600:400, cursor:"pointer", border:`0.5px solid ${i===0?C.blue:C.border}` }}>{r}</div>
        ))}
      </div>
      <div style={{ flex:1, display:"flex", flexDirection:"column", gap:12 }}>
        <Card>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:14 }}>
            <div>
              <div style={{ fontSize:15, fontWeight:700 }}>Revenue Report</div>
              <div style={{ fontSize:11, color:C.muted }}>Monthly revenue collected vs outstanding fees</div>
            </div>
            <div style={{ display:"flex", gap:8 }}>
              <Select label="Jan–Oct 2024" /><Btn label="Export PDF" outline sm /><Btn label="Export Excel" outline sm />
            </div>
          </div>
          <div style={{ display:"flex", gap:10, marginBottom:14 }}>
            <Stat value="RM 134,100" label="Total Collected YTD" color={C.green} />
            <Stat value="RM 18,400" label="Best Month (Oct)" color={C.blue} />
            <Stat value="RM 3,200" label="Currently Outstanding" color={C.red} />
            <Stat value="89%" label="Collection Rate" color={C.purple} />
          </div>
          <MiniBar values={[8200, 9800, 11200, 10400, 14000, 13200, 15800, 16200, 17100, 18400]} h={100} />
          <div style={{ display:"flex", justifyContent:"space-between", marginTop:6 }}>
            {["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"].map(m=><span key={m} style={{ fontSize:10, color:C.hint }}>{m}</span>)}
          </div>
        </Card>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
          <Card>
            <CardTitle text="Revenue by Course" />
            {[["Mathematics","RM 54,200","37%",C.blue],["English","RM 38,600","26%",C.green],["Science","RM 28,400","19%",C.amber],["BM","RM 12,900","9%",C.purple],["Others","RM 13,200","9%",C.hint]].map(([course,amt,pct,color])=>(
              <div key={course}>
                <div style={{ display:"flex", justifyContent:"space-between", marginBottom:3 }}>
                  <span style={{ fontSize:11, color:C.text }}>{course}</span>
                  <span style={{ fontSize:11, fontWeight:700 }}>{amt}</span>
                </div>
                <div style={{ height:6, background:C.ph, borderRadius:3, marginBottom:8 }}>
                  <div style={{ height:"100%", width:pct, background:color, borderRadius:3 }} />
                </div>
              </div>
            ))}
          </Card>
          <Card>
            <CardTitle text="Payment Method Breakdown" />
            {[["Bank Transfer","52%",C.blue],["Online (Midtrans/Xendit)","28%",C.green],["Cash","14%",C.amber],["E-Wallet","6%",C.purple]].map(([method,pct,color])=>(
              <div key={method}>
                <div style={{ display:"flex", justifyContent:"space-between", marginBottom:3 }}>
                  <span style={{ fontSize:11, color:C.text }}>{method}</span>
                  <span style={{ fontSize:11, fontWeight:700 }}>{pct}</span>
                </div>
                <div style={{ height:6, background:C.ph, borderRadius:3, marginBottom:8 }}>
                  <div style={{ height:"100%", width:pct, background:color, borderRadius:3 }} />
                </div>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </div>
  );
}

// ─── Screen Registry ──────────────────────────────────────────────────────────

const SCREENS = {
  "Dashboard":          { title:"Dashboard", sub:"Overview & quick actions", role:"Management", component: AdminDashboard },
  "Reports & Analytics":{ title:"Reports & Analytics", sub:"Business intelligence & exports", role:"Management", component: Reports },
  "Student Management": { title:"Student Management", sub:"All students · 247 active", role:"Management", component: StudentManagement,
    actions: <><Btn label="Import" outline sm /><Btn label="+ Add Student" primary sm /></> },
  "Student Profile":    { title:"Student Profile", sub:"Aiman Haziq bin Rosli · SC-2024-001", role:"Management", component: StudentProfile },
  "Educator Management":{ title:"Educator Management", sub:"Staff records & assignments", role:"Management", component: ()=>(
    <div style={{padding:18}}>
      <div style={{display:"flex",gap:10,marginBottom:14}}>
        <Stat value="18" label="Total Educators" color={C.blue} icon="👩‍🏫" />
        <Stat value="14" label="Full-Time" color={C.green} icon="✅" />
        <Stat value="4" label="Part-Time / Freelance" color={C.purple} icon="🕐" />
        <Stat value="2" label="On Leave Today" color={C.amber} icon="🏖️" />
      </div>
      <Card p={0}>
        <div style={{padding:"12px 14px",display:"flex",gap:8,borderBottom:`0.5px solid ${C.border}`}}>
          <Input placeholder="🔍  Search educator name or subject..." style={{flex:1}} />
          <Select label="All Subjects" /><Select label="All Status" />
          <Btn label="+ Add Educator" primary />
        </div>
        <TableHead cols={[{label:"Educator"},{label:"Subjects"},{label:"Classes/Week"},{label:"Type"},{label:"Status"},{label:""}]} />
        {[["Ustazah Nor Hidayah","Mathematics","8 classes","Full-Time","Active"],["Mr. Fariz Abdullah","English","6 classes","Full-Time","Active"],["Cik Laila bt Hamid","Science","5 classes","Part-Time","Active"],["En. Halim Hashim","Bahasa Melayu","7 classes","Full-Time","On Leave"],["Pn. Sarina Daud","English, BM","4 classes","Freelance","Active"]].map(([name,subj,cls,type,status],i,arr)=>(
          <TableRow key={i} last={i===arr.length-1} cols={[{},{},{},{},{},{}]} values={[
            <div style={{display:"flex",alignItems:"center",gap:8}}><Avatar name={name} size={26} color={C.purple} /><span style={{fontWeight:600}}>{name}</span></div>,
            <Badge text={subj} color="purple" />,
            <span style={{color:C.muted,fontSize:12}}>{cls}</span>,
            <Badge text={type} color={type==="Full-Time"?"blue":type==="Part-Time"?"green":"amber"} />,
            <Badge text={status} color={status==="Active"?"green":status==="On Leave"?"amber":"gray"} />,
            <Btn label="View" sm outline />,
          ]} />
        ))}
      </Card>
    </div>
  )},
  "Class Schedule":     { title:"Class Schedule", sub:"Weekly timetable — 28 Oct–2 Nov 2024", role:"Management", component: ClassSchedule,
    actions: <><Btn label="+ Add Class" primary sm /></> },
  "Enrollment":         { title:"New Enrollment", sub:"Step-by-step student registration", role:"Management", component: Enrollment },
  "Fee & Payments":     { title:"Fee & Payments", sub:"Invoices, collections & outstanding", role:"Management", component: FeePayments },
  // Educator
  "My Dashboard":       { title:"My Dashboard", sub:"Welcome back, Ustazah Nor", role:"Educator", component: ()=>(
    <div style={{padding:18,display:"flex",flexDirection:"column",gap:14}}>
      <div style={{display:"flex",gap:10}}>
        <Stat value="5" label="My Classes" color={C.blue} icon="📚" />
        <Stat value="89" label="Total Students" color={C.green} icon="🎓" />
        <Stat value="2" label="Classes Today" color={C.purple} icon="📅" />
        <Stat value="3" label="Grades Pending" color={C.amber} icon="📝" />
      </div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
        <Card>
          <CardTitle text="My Classes Today" />
          {[["8:00–9:30 AM","Math Yr 5","Room A","18 students"],["2:00–3:30 PM","Math Yr 6","Room A","14 students"]].map(([time,name,room,count],i)=>(
            <div key={i} style={{display:"flex",gap:10,padding:"8px 0",borderBottom:i<1?`0.5px solid ${C.border}`:"none"}}>
              <div style={{width:3,background:C.blue,borderRadius:2,flexShrink:0}} />
              <div style={{flex:1}}>
                <div style={{fontSize:13,fontWeight:700}}>{name}</div>
                <div style={{fontSize:11,color:C.muted}}>{time} · {room} · {count}</div>
              </div>
              <Btn label="Mark Attendance" sm primary />
            </div>
          ))}
        </Card>
        <Card>
          <CardTitle text="Pending Tasks" />
          {[["Enter grades","Math Yr 5 — Quiz 3","Due today","red"],["Enter grades","Math Yr 6 — Mid-Year","Due 30 Oct","amber"],["Upload materials","Chapter 7 Notes","Due 1 Nov","amber"]].map(([type,name,due,c],i)=>(
            <div key={i} style={{display:"flex",alignItems:"center",gap:10,padding:"7px 0",borderBottom:i<2?`0.5px solid ${C.border}`:"none"}}>
              <div style={{flex:1}}><div style={{fontSize:12,fontWeight:500}}>{type}</div><div style={{fontSize:11,color:C.muted}}>{name}</div></div>
              <Badge text={due} color={c} />
            </div>
          ))}
        </Card>
      </div>
    </div>
  )},
  "Mark Attendance":    { title:"Mark Attendance", sub:"Real-time session attendance", role:"Educator", component: MarkAttendance },
  "Enter Grades":       { title:"Enter Grades", sub:"Assessment scores & remarks", role:"Educator", component: EnterGrades },
  // Student
  "Student Dashboard":  { title:"Dashboard", sub:"Hi Aiman! Here's your overview", role:"Student", component: StudentDashboard },
  // Parent
  "Parent Dashboard":   { title:"Overview", sub:"Monitoring Aiman Haziq's progress", role:"Parent", component: ParentDashboard },
};

const ROLE_DEFAULTS = { Management:"Dashboard", Educator:"My Dashboard", Student:"Student Dashboard", Parent:"Parent Dashboard" };
const ROLE_COLORS = { Management:C.blue, Educator:C.green, Student:C.amber, Parent:C.purple };

// ─── App Shell ────────────────────────────────────────────────────────────────

export default function App() {
  const [role, setRole] = useState("Management");
  const [screen, setScreen] = useState("Dashboard");

  const handleRole = (r) => { setRole(r); setScreen(ROLE_DEFAULTS[r]); };

  const sc = SCREENS[screen] || SCREENS[ROLE_DEFAULTS[role]];
  const Component = sc?.component;

  return (
    <div style={{ fontFamily:"'DM Sans','Helvetica Neue',sans-serif", background:C.bg, minHeight:"100vh", display:"flex", flexDirection:"column" }}>
      {/* Top role picker */}
      <div style={{ background:C.card, borderBottom:`0.5px solid ${C.border}`, padding:"10px 16px", display:"flex", gap:6, alignItems:"center" }}>
        <span style={{ fontSize:11, color:C.hint, marginRight:4 }}>Viewing as:</span>
        {["Management","Educator","Student","Parent"].map(r=>(
          <button key={r} onClick={()=>handleRole(r)} style={{ padding:"6px 16px", fontSize:12, fontWeight:role===r?700:500, borderRadius:20, border:`1.5px solid ${role===r?ROLE_COLORS[r]:C.border}`, background:role===r?ROLE_COLORS[r]+"15":"transparent", color:role===r?ROLE_COLORS[r]:C.muted, cursor:"pointer", transition:"all .15s" }}>
            {r}
          </button>
        ))}
        <div style={{ marginLeft:"auto", fontSize:11, color:C.hint }}>
          Wireframe Explorer · {Object.keys(SCREENS).filter(k=>SCREENS[k].role===role||!SCREENS[k].role).length} screens
        </div>
      </div>

      {/* App layout */}
      <div style={{ display:"flex", flex:1, overflow:"hidden", height:"calc(100vh - 53px)" }}>
        <Sidebar role={role} active={screen} onNav={(s)=>setScreen(s)} />
        <div style={{ flex:1, display:"flex", flexDirection:"column", overflow:"hidden" }}>
          <Header
            title={sc?.title || screen}
            sub={sc?.sub}
            actions={sc?.actions}
          />
          <div style={{ flex:1, overflowY:"auto" }}>
            {Component ? <Component /> : (
              <div style={{ padding:40, textAlign:"center", color:C.hint }}>
                <div style={{ fontSize:40, marginBottom:12 }}>🚧</div>
                <div style={{ fontSize:14, fontWeight:600, marginBottom:4, color:C.muted }}>Screen coming soon</div>
                <div style={{ fontSize:12 }}>Click any item in the sidebar to view its wireframe.</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
