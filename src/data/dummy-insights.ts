export type DummyInsightArticle = {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  image_url: string;
  date: string;
  read_time: string;
  author: string;
  author_image?: string;
  author_role?: string;
};

export const DUMMY_INSIGHT_ARTICLES: DummyInsightArticle[] = [
  {
    id: "insight-platform-reliability-2026",
    title: "Platform Reliability: What We Fixed to Cut Incidents by 60%",
    category: "Engineering",
    excerpt:
      "A practical playbook for reducing incident volume: service ownership, SLOs, alert hygiene, and progressive delivery—what actually moved the needle for our team.",
    content: `
      <h2>Why we changed our approach</h2>
      <p>As our customer base grew, our incident rate grew with it. The root cause wasn’t a single bug—our system lacked clear ownership, measurable goals, and safe rollout practices.</p>

      <h2>What we implemented</h2>
      <ul>
        <li><strong>Service ownership:</strong> every service has a DRI and an on-call rotation.</li>
        <li><strong>SLOs:</strong> we defined availability and latency targets per critical path.</li>
        <li><strong>Alert hygiene:</strong> we removed noisy alerts, added actionable runbooks, and measured alert-to-action time.</li>
        <li><strong>Progressive delivery:</strong> canary releases with automated rollback on SLO regression.</li>
      </ul>

      <h2>Results</h2>
      <p>Within two quarters, we reduced incident volume and improved mean time to recovery. Most importantly, releases became predictable.</p>
    `,
    image_url:
      "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=1200&auto=format&fit=crop&q=80",
    date: "May 2026",
    read_time: "7 min read",
    author: "Ama Mensah",
    author_role: "Principal Engineer",
    author_image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&auto=format&fit=crop&q=80",
  },
  {
    id: "insight-cloud-costs-guardrails",
    title: "Cloud Cost Guardrails: From Surprise Bills to Predictable Spend",
    category: "Cloud",
    excerpt:
      "Cost optimization isn’t a one-off project. Here’s how we built guardrails—budgets, anomaly alerts, and right-sizing—to keep spend predictable without slowing engineering.",
    content: `
      <h2>The problem</h2>
      <p>Usage-based SaaS models can create cost volatility. Without guardrails, a single misconfiguration can become an expensive lesson.</p>

      <h2>Our guardrails</h2>
      <ul>
        <li><strong>Budgets per environment</strong> with automated notifications.</li>
        <li><strong>Anomaly detection</strong> on network egress and managed database usage.</li>
        <li><strong>Right-sizing cadence</strong> baked into sprint routines.</li>
        <li><strong>Cost-aware architecture</strong> decisions documented in ADRs.</li>
      </ul>

      <h2>Takeaway</h2>
      <p>Guardrails let teams move fast <em>and</em> stay within a predictable cost envelope.</p>
    `,
    image_url:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80",
    date: "April 2026",
    read_time: "6 min read",
    author: "Kwame Owusu",
    author_role: "Cloud Architect",
    author_image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=256&auto=format&fit=crop&q=80",
  },
  {
    id: "insight-devops-ci-cd-safety",
    title: "Safer CI/CD: The Checks That Prevented Bad Deployments",
    category: "DevOps",
    excerpt:
      "We tightened our delivery pipeline with lightweight checks that catch failures early—without turning CI into a slow, brittle gate.",
    content: `
      <h2>What we optimized for</h2>
      <p>We wanted fast feedback, consistent quality, and safe rollouts. The goal wasn’t “more checks”—it was the <strong>right</strong> checks.</p>

      <h2>Pipeline changes</h2>
      <ul>
        <li>Mandatory <strong>type checks</strong> and <strong>lint</strong> on every PR</li>
        <li>Targeted <strong>integration tests</strong> for the highest-risk paths</li>
        <li><strong>Preview environments</strong> for UI and API verification</li>
        <li><strong>Release toggles</strong> to decouple deploy from release</li>
      </ul>

      <p>The biggest win was consistency: teams had a shared definition of “ready to ship.”</p>
    `,
    image_url:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&auto=format&fit=crop&q=80",
    date: "March 2026",
    read_time: "5 min read",
    author: "Esi Boateng",
    author_role: "DevOps Engineer",
    author_image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=256&auto=format&fit=crop&q=80",
  },
  {
    id: "insight-security-rbac-2026",
    title: "Practical SaaS Security: RBAC That Doesn’t Slow Teams Down",
    category: "Security",
    excerpt:
      "RBAC is easy to get wrong. Here’s the model we use for multi-tenant SaaS: roles, scopes, audit trails, and a migration path from simple to robust.",
    content: `
      <h2>Start simple, but plan for growth</h2>
      <p>Many SaaS products start with a single “admin” role. That works—until customers need more granular permissions.</p>

      <h2>Our approach</h2>
      <ul>
        <li><strong>Role templates</strong> (Admin, Manager, Viewer) plus custom roles</li>
        <li><strong>Scopes</strong> that map to resources (org, project, environment)</li>
        <li><strong>Audit trails</strong> for sensitive actions</li>
        <li><strong>Default-deny</strong> for newly introduced capabilities</li>
      </ul>

      <p>Security works best when it’s a product feature—not a late-stage add-on.</p>
    `,
    image_url:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&auto=format&fit=crop&q=80",
    date: "February 2026",
    read_time: "8 min read",
    author: "Kofi Asare",
    author_role: "Security Engineer",
    author_image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=256&auto=format&fit=crop&q=80",
  },
  {
    id: "insight-ai-support-triage",
    title: "AI Support Triage: Automating the 30% That Matters",
    category: "AI/ML",
    excerpt:
      "We built an AI-assisted workflow that categorizes tickets, drafts replies, and routes edge cases—without pretending AI can solve everything.",
    content: `
      <h2>Where AI helps</h2>
      <p>AI works best when it reduces repetitive work and accelerates resolution. It fails when it invents facts or bypasses human judgment.</p>

      <h2>Workflow</h2>
      <ul>
        <li><strong>Classification</strong> (billing, auth, performance, integrations)</li>
        <li><strong>Suggested replies</strong> based on approved knowledge articles</li>
        <li><strong>Routing</strong> for high-severity issues and VIP accounts</li>
        <li><strong>Human-in-the-loop</strong> approvals with feedback capture</li>
      </ul>

      <p>We treat the model as an assistant, not an agent.</p>
    `,
    image_url:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1200&auto=format&fit=crop&q=80",
    date: "January 2026",
    read_time: "6 min read",
    author: "Nana Agyeman",
    author_role: "Machine Learning Engineer",
    author_image:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=256&auto=format&fit=crop&q=80",
  },
  {
    id: "insight-saas-metrics-north-star",
    title: "SaaS Metrics That Matter: Choosing a North Star",
    category: "SaaS",
    excerpt:
      "Dashboards don’t create clarity. We share how we picked a North Star metric, aligned teams around it, and avoided vanity metrics.",
    content: `
      <h2>Why a North Star matters</h2>
      <p>Teams can optimize for different things and still lose. A North Star metric aligns product, engineering, and go-to-market around customer value.</p>

      <h2>Our selection criteria</h2>
      <ul>
        <li><strong>Value-driven:</strong> reflects real customer outcomes</li>
        <li><strong>Leading indicator:</strong> predicts retention and expansion</li>
        <li><strong>Actionable:</strong> teams can influence it directly</li>
      </ul>

      <p>Then we paired it with guardrail metrics (latency, churn, support load) to avoid “winning” in one place by breaking another.</p>
    `,
    image_url:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&auto=format&fit=crop&q=80",
    date: "December 2025",
    read_time: "7 min read",
    author: "Adjoa Serwaa",
    author_role: "Product Lead",
    author_image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=256&auto=format&fit=crop&q=80",
  },
];
