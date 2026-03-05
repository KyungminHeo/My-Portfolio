import { Project, SkillCategory, Education, CareerItem } from './types';

export const PROFILE = {
  name: "허경민",
  title: "AI, Backend, 클라우드, CRM 풀스택 개발자",
  email: "rusemia@gmail.com",
  phone: "010-9046-7117",
  currentRole: "",
  summaryQuote: `"문제를 해결하고 가치를 창출하는 개발자,\n아키텍처 설계부터 서비스 구현까지 비즈니스를 극대화합니다."`,
  introduction: "아키텍처 설계부터 AI·백엔드까지,\n비즈니스 가치를 극대화합니다.",
  introPoints: [
    "엔터프라이즈 SaaS 및 CRM 구축 경험을 바탕으로, 최근에는 생성형 AI와 백엔드 기술을 결합한 지능형 자동화 서비스 구축에 집중하고 있습니다.",
    "단순한 기능 구현을 넘어, 서비스의 확장성과 효율성을 최우선으로 고려하며 조직 내 기술 리더십을 발휘하여 팀의 성장을 돕습니다."
  ]
};

export const KEY_COMPETENCIES = [
  { name: "Azure OpenAI", icon: "Bot" },
  { name: "RAG System", icon: "Database" },
  { name: "Python / FastAPI", icon: "Code" },
  { name: "MSA & Kafka", icon: "Layers" },
  { name: "C# .NET", icon: "Layout" },
  { name: "Dynamics 365 & Power Platform", icon: "Users" },
  { name: "Azure Cloud", icon: "Cloud" },
  { name: "Docker", icon: "Box" },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "AI & ML",
    skills: ["Azure OpenAI", "Assistants API", "Azure Speech (STT/TTS)", "Google Gemini", "RAG Pipeline", "Prompt Engineering"],
    icon: "Brain",
    colorClass: "bg-purple-100 text-purple-700 border-purple-200"
  },
  {
    category: "FRONTEND",
    skills: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "PowerApps (PCF)", "DevExpress"],
    icon: "Layout",
    colorClass: "bg-blue-100 text-blue-700 border-blue-200"
  },
  {
    category: "BACKEND",
    skills: ["Python (FastAPI)", "C# (.NET Core)", "ASP.NET MVC", "SQLAlchemy", "RESTful API", "WebSocket"],
    icon: "Server",
    colorClass: "bg-indigo-100 text-indigo-700 border-indigo-200"
  },
  {
    category: "DATA",
    skills: ["PostgreSQL (pgvector)", "MongoDB", "Redis", "Kafka", "MSSQL", "Dataverse"],
    icon: "Database",
    colorClass: "bg-emerald-100 text-emerald-700 border-emerald-200"
  },
  {
    category: "CLOUD DEVOPS",
    skills: ["Azure Container Apps", "Docker", "Nginx (API Gateway)", "Linux", "Git", "Locust (Load Test)"],
    icon: "Cloud",
    colorClass: "bg-slate-100 text-slate-700 border-slate-200"
  }
];

export const CAREER_TIMELINE: CareerItem[] = [
  {
    company: "(주) 덱스컨설팅",
    role: "Dynamics 팀 | 차장",
    period: "2024.04 - 2025.11",
    description: "AI & Cloud Solution. AI 실시간 회의록 솔루션 'DADAM' PM/PL 총괄 및 아키텍처 설계. Azure OpenAI/Speech 기반 기업용 RAG 챗봇 및 KT ESG POV 리딩."
  },
  {
    company: "(주) 클루커스",
    role: "CXC팀 | 매니저",
    period: "2022.05 - 2024.04",
    description: "Cloud MSP & CRM. CTR AM/OE 차세대 CRM 및 영업관리 시스템(PO) 전환 구축 PL. Salesforce to Dynamics 365 마이그레이션 및 프로세스 재설계 주도."
  },
  {
    company: "(주) 메타넷티플랫폼",
    role: "CXG팀 | 과장",
    period: "2022.01 - 2022.05",
    description: "Internal System. 사내 CRM(Dynamics 365) 기능 고도화 및 커스텀 웹 리소스 개발. ASP.NET MVC 활용한 기능 확장 및 UI/UX 개선."
  },
  {
    company: "(주) 커스토머인사이트",
    role: "MS팀 | 선임",
    period: "2017.03 - 2022.01",
    description: "Marketing Automation. Converse 캠페인/알림톡 시스템 구축(PL), 한성자동차 통합 마케팅 플랫폼, 연합인포맥스 CRM 전환, 인터로조 멤버십 API 서버 아키텍처 설계."
  }
];

export const EARLY_CAREER: CareerItem[] = [
  {
    company: "(주) 플러시안",
    role: "판타지 스포츠 게임 Full-stack 개발",
    period: "2016.01 - 09"
  },
  {
    company: "(주) NC ITS",
    role: "현대캐피탈/NC다이노스 전력분석 시스템",
    period: "2014.12 - 2015.12"
  },
  {
    company: "(주) 아이엔씨시스템",
    role: "반도체 장비 모니터링 클라이언트 개발",
    period: "2013.11 - 2014.09"
  },
  {
    company: "제이에스엠테크놀러지",
    role: "반도체 Chiller 제어 시스템 개발",
    period: "2013.05 - 11"
  }
];

export const PROJECTS: Project[] = [
  // --- Personal Projects (Top Priority) ---
  {
    id: "p_langgraph",
    title: "LangGraph 기반 지능형 LLM API 게이트웨이",
    period: "2025.02 ~ 진행중",
    isPersonal: true,
    summary: "LangGraph를 활용한 멀티 에이전트 LLM API 게이트웨이입니다. 사용자 의도 분류, 전문 에이전트 라우팅, 이중 Guard Rails, SSE 스트리밍 등을 구현했습니다.",
    techStack: ["Python 3.11", "FastAPI", "LangGraph", "LangChain", "Ollama", "PostgreSQL", "Redis", "Docker", "Nginx"],
    role: "Backend Dev (시스템 설계, 인프라 구성, 전체 서비스 구현)",
    description: "단순한 LLM 프록시를 넘어, 사용자 질의의 의도를 실시간 분류하고 목적에 최적화된 전문 에이전트로 자동 라우팅하는 멀티 에이전트 아키텍처입니다. 입력 보안 검증, 출력 품질 검증, SSE 스트리밍, 캐싱 등 프로덕션 수준의 AI 인프라를 구축했습니다.",
    keyAchievements: [
      "LangGraph 멀티 에이전트 아키텍처 구축 (10+ 노드, 4방향 의도 분류)",
      "이중 Guard Rails 보안 파이프라인 (Input/Output Guard) 구축",
      "SSE 실시간 토큰 스트리밍 및 노드별 상태 알림 구현",
      "Polyglot 모델 전략 (3B/7B 모델 자동 분배)으로 속도와 품질 균형 달성",
      "Redis 기반 다층 인프라 (캐싱, Rate Limiting, 로깅) 최적화",
      "JWT + API Key 이중 인증 및 RBAC 시스템 구현"
    ],
    architecture: [
      "Gateway Layer (Nginx): Rate Limiting, SSE Proxy, Timeout 설정",
      "App Layer (FastAPI): 인증, 쿼터, 캐싱, LangGraph 실행",
      "Agent Layer (LangGraph): Input Guard → Intent Classifier → Subgraphs → Output Guard",
      "Inference Layer (Ollama): llama3.2:3b (분류/경량), qwen2.5:7b (생성/분석)",
      "Infra Layer: PostgreSQL (DB), Redis (Cache/Quota/Log)"
    ],
    challenges: [
      {
        title: "A. LLM 기반 동적 Intent Classification",
        problem: "단어 수 기반의 단순 규칙으로는 '짧지만 검색이 필요한 질문'과 '단순 인사'를 구분하지 못해 비효율적인 모델 할당이 발생했습니다.",
        solution: "LLM Structured Output을 활용해 사용자 의도를 4방향(search/analysis/creative/general)으로 동적 분류하고, 확신도가 낮으면 안전하게 General로 폴백하는 로직을 구현했습니다."
      },
      {
        title: "B. 복합 에이전트 서브그래프 설계",
        problem: "단일 LLM 호출로는 검색, 심층 분석, 도구 사용 등 복잡한 요구사항을 한 번에 처리하기 어려웠습니다.",
        solution: "검색(3단계), 분석(3단계), 창작(Tool Calling) 등 의도별 전문 서브그래프를 설계하고, 경량/고성능 모델을 적재적소에 배치하는 Polyglot 전략을 적용했습니다."
      },
      {
        title: "C. 이중 Guard Rails (입력/출력 검증)",
        problem: "프롬프트 인젝션 공격이나 LLM의 저품질/빈 응답 생성 위험이 존재했습니다.",
        solution: "Input Guard로 인젝션/유해 패턴을 사전 차단하여 비용을 절감하고, Output Guard로 응답 품질을 검증해 재시도하거나 안내 메시지로 폴백하는 양방향 안전장치를 구축했습니다."
      },
      {
        title: "D. SSE 스트리밍과 Nginx 최적화",
        problem: "LLM의 긴 응답 시간 동안 사용자가 대기해야 하며, Nginx의 기본 버퍼링 설정이 SSE 스트리밍을 방해했습니다.",
        solution: "LangGraph의 astream_events로 토큰 단위 스트리밍을 구현하고, Nginx에서 proxy_buffering off 및 타임아웃을 300초로 설정하여 실시간성을 보장했습니다."
      },
      {
        title: "E. Redis 다층 인프라 서비스 설계",
        problem: "중복 질문에 대한 비용 낭비와 사용자별 사용량 제어가 필요했습니다.",
        solution: "단일 Redis로 응답 캐싱(Cache-Aside), 분당 쿼터(Atomic INCR), 토큰 로깅(Pipeline)을 통합 구현하여 인프라 복잡도를 낮추고 네트워크 효율을 높였습니다."
      }
    ],
    insights: [
      "LangGraph의 조건부 분기와 서브그래프가 복잡한 AI 워크플로우 관리에 핵심적임을 확인",
      "Guard Rails는 비용 절감과 서비스 품질 안정화 양면에서 필수적",
      "Polyglot LLM 전략으로 응답 속도와 품질의 균형을 맞추는 것이 실용적",
      "SSE 스트리밍 시 Nginx 등 앞단 프록시의 설정(버퍼링 해제)이 매우 중요함"
    ]
  },
  {
    id: "p0",
    title: "MSA 기반 실시간 채팅 플랫폼 (Chat Platform)",
    period: "2024.08 ~ 2024.11",
    isPersonal: true,
    summary: "대규모 트래픽 환경에서의 실시간 채팅을 지원하는 MSA 기반 백엔드 시스템입니다. WebSocket, Kafka, Redis를 활용하여 고성능·고가용성 인프라를 구축했습니다.",
    techStack: ["Python 3.11", "FastAPI", "WebSocket", "Kafka", "Redis", "MongoDB", "PostgreSQL", "Nginx", "Docker", "Locust"],
    role: "System Architecture & Backend Dev (100%)",
    description: "채팅 서비스의 핵심 요구사항인 실시간성, 확장성, 안정성을 충족하기 위해 설계된 MSA 백엔드 시스템입니다. 도메인별 서비스 분리, 전 구간 비동기 I/O, 다층 캐싱 전략을 통해 엔터프라이즈급 채팅 엔진을 구현했습니다.",
    keyAchievements: [
      "3개 독립 마이크로서비스(User, Chat, Notification) 분리 및 Kafka 기반 비동기 통신 구현",
      "FastAPI + aiokafka + Motor 기반의 전 구간 비동기 I/O 파이프라인 구축",
      "Redis 온라인 상태 공유 및 ConnectionManager 패턴으로 다중 인스턴스 실시간 브로드캐스트 구현",
      "Nginx API Gateway를 통한 Rate Limiting, CORS, WebSocket Upgrade 통합 관리",
      "Locust 부하 테스트: 500명 동시접속 시 연결 끊김 0건 및 WebSocket RTT 4ms 달성",
      "커서 기반 페이지네이션(Cursor-based Pagination) 도입으로 대용량 메시지 조회 성능 최적화"
    ],
    architecture: [
      "API Gateway (Nginx): 단일 진입점 제공, URI 기반 라우팅 및 Rate Limiting",
      "User Service (PostgreSQL): JWT 기반 인증 및 유저 프로필 관리",
      "Chat Service (MongoDB): WebSocket 통신 및 메시지 영구 저장, Kafka Producer 역할",
      "Notification Service (Redis): Kafka Consumer로서 오프라인 유저 알림 처리 및 상태 관리",
      "Message Broker (Kafka): 서비스 간 결합도 제거를 위한 이벤트 드리븐 아키텍처"
    ],
    challenges: [
      {
        title: "A. MSA 아키텍처 설계 및 서비스 분리",
        problem: "모놀리식 구조에서는 채팅 트래픽 급증 시 인증이나 알림 로직까지 영향을 받는 단일 장애점(SPOF) 문제가 발생할 위험이 컸습니다.",
        solution: "도메인 경계를 기준으로 User, Chat, Notification 서비스를 분리하고, 서비스 간 직접 호출 대신 Kafka를 통한 이벤트 기반 비동기 통신을 도입하여 독립적인 배포와 확장이 가능한 구조를 확보했습니다."
      },
      {
        title: "B. WebSocket 실시간 메시지 처리 엔진",
        problem: "HTTP Polling 방식은 불필요한 요청 반복과 지연이 발생하여 실시간성이 중요한 채팅 서비스에 부적합했습니다.",
        solution: "WebSocket 기반 양방향 통신과 ConnectionManager 패턴을 구현했습니다. 메시지 전송 시 'DB 저장 → 응답 생성 → 브로드캐스트 → Kafka 발행 → 캐시 갱신'의 5단계 파이프라인을 설계하여 데이터 일관성과 실시간성을 동시에 확보했습니다."
      },
      {
        title: "C. Kafka 이벤트 기반 오프라인 알림 시스템",
        problem: "WebSocket 연결이 끊긴 오프라인 유저에게도 메시지 유실 없이 알림을 전달해야 했습니다.",
        solution: "Chat Service에서 발행한 이벤트를 Notification Service가 구독하도록 설계했습니다. Redis에서 유저의 온라인 상태를 실시간 확인하여 오프라인 유저에게만 선택적으로 알림을 저장하고, Kafka 연결 실패 시 백오프 재시도 전략을 적용해 안정성을 높였습니다."
      },
      {
        title: "D. Redis 다층 캐싱 전략 설계",
        problem: "매 요청마다 DB를 조회하면 응답 지연이 발생하며, 특히 채팅방 입장 시 최근 메시지 로딩에서 병목이 발생했습니다.",
        solution: "유저 프로필, 최근 메시지(30개), 온라인 상태, 알림 데이터 등 4가지 레이어에 캐싱을 적용했습니다. Redis Pipeline을 활용하여 알림 일괄 읽음 처리 시 네트워크 왕복 비용을 최소화했습니다."
      },
      {
        title: "E. Nginx를 활용한 인프라 제어",
        problem: "마이크로서비스별 직접 접근 시 보안 취약점이 발생하고 포트 관리가 복잡해지는 문제가 있었습니다.",
        solution: "Nginx를 Reverse Proxy로 구성하여 단일 진입점을 제공하고, Rate Limiting을 적용해 DDoS 공격을 방어했습니다. 또한 WebSocket Upgrade 헤더 처리와 타임아웃 설정을 통해 안정적인 연결 유지를 보장했습니다."
      }
    ],
    insights: [
      "비동기 프로그래밍의 위력: 전 계층에 async/await를 적용함으로써 동시성 처리 능력이 비약적으로 향상됨을 확인",
      "이벤트 드리븐의 유연성: Kafka 도입으로 서비스 간 의존성을 제거하여 시스템 전체의 가용성과 확장성을 확보",
      "부하 테스트의 중요성: Locust를 통한 수치 기반 검증으로 시스템의 임계치를 파악하고 병목 지점을 최적화하는 경험"
    ]
  },
  {
    id: "p1",
    title: "Minibuds (문서 기반 지능형 Q&A 시스템)",
    period: "2024.12 ~ 진행중",
    isPersonal: true,
    summary: "LLM의 환각 현상을 최소화하고 한국어 문서 검색 정확도를 극대화한 PDF 기반 RAG 시스템입니다.",
    techStack: ["Python 3.11+", "FastAPI", "PostgreSQL (pgvector)", "SQLAlchemy", "Google Gemini", "OpenAI", "Docker"],
    role: "Full Stack (Backend 중심, AI 파이프라인 설계)",
    description: "PDF 문서를 업로드하면 내용을 분석하여 사용자 질문에 정확하게 답변하는 생성형 AI 기반 지능형 문서 검색 시스템입니다. LLM의 환각(Hallucination) 현상을 최소화하기 위해 RAG 아키텍처를 도입하고, 한국어 문서 검색 정확도를 높이기 위한 다양한 최적화 기법을 적용했습니다.",
    keyAchievements: [
      "하이브리드 검색 엔진 구현 (Vector Search + Full-Text Search + RRF 알고리즘)",
      "Factory 패턴을 적용한 Multi-LLM 아키텍처 설계 (GPT-4o, Gemini 1.5 전환)",
      "문장 경계 인식(Sentence-Aware) 청킹 및 Overlapping 기법 적용",
      "대화 맥락 유지를 위한 Query Rewriting 구현",
      "FastAPI 비동기(Async) 처리를 통한 대용량 벡터 임베딩 성능 최적화",
      "Gemini SDK 내부 캐싱 버그 발견 및 해결"
    ],
    architecture: [
      "Client Layer: React/Vite 기반 프론트엔드",
      "API Layer (FastAPI): FileService(PDF), ChunkService, AIServiceFactory(Multi-LLM)로 구성된 비동기 서버",
      "Database Layer (PostgreSQL): pgvector(임베딩), Full-Text Search(GIN 인덱스) 활용",
      "AI Pipeline: OpenAI/Gemini Embeddings & Generation Models"
    ],
    challenges: [
      {
        title: "A. 하이브리드 검색 엔진 (Hybrid Search) 구현",
        problem: "단순 코사인 유사도(Cosine Similarity) 기반의 벡터 검색만으로는 '허경민', '덱스컨설팅' 같은 고유명사나 정확한 키워드 매칭이 필요한 한국어 사내 문서 검색에서 정확도가 떨어지는 한계가 발생했습니다.",
        solution: "pgvector를 사용한 의미 기반 검색(Vector Search, 가중치 30%)과 기존 키워드 기반 검색(Full-Text Search, 가중치 70%)을 결합하고, RRF(Reciprocal Rank Fusion) 알고리즘 개념을 도입하여 랭킹을 재산정하는 하이브리드 엔진을 구현했습니다."
      },
      {
        title: "B. 유연한 AI 모델 교체를 위한 디자인 패턴 적용",
        problem: "LLM 시장의 빠른 변화로 인해 특정 벤더(OpenAI 등)에 종속되지 않고, 비용과 성능에 따라 모델을 런타임에 쉽게 교체해야 할 필요성이 있었습니다.",
        solution: "Factory Method Pattern을 도입하여 AIService 인터페이스를 정의하고, 환경 변수 설정만으로 Gemini와 OpenAI를 즉시 교체할 수 있는 구조를 완성하여 Vendor Lock-in을 방지했습니다. 또한 플랫폼별 임베딩 차원(1536 vs 768)을 자동 관리하도록 설계했습니다."
      },
      {
        title: "C. 문장 경계 인식 청킹 (Sentence-Aware Chunking)",
        problem: "단순 문자 수 기반 분할(Fixed-length) 시 문장이 중간에 끊겨('허xx은 ooo에서 5'...) 임베딩 품질과 답변 정확도가 저하되었습니다.",
        solution: "한국어/영어 문장 종결 패턴을 감지하여 문장 단위로 청크를 생성하는 커스텀 알고리즘을 구현하고, Overlapping 구간을 두어 문맥 유실을 방지했습니다."
      },
      {
        title: "D. 비동기(Async) 처리를 통한 사용자 경험 개선",
        problem: "벡터 임베딩 생성 작업이 1~2분 이상 소요되어, 동기(Sync) 처리 시 사용자 요청이 타임아웃 되거나 서버가 블로킹되는 현상이 발생했습니다.",
        solution: "FastAPI의 async def 및 Background Tasks를 활용하여 무거운 임베딩 작업을 백그라운드로 위임하고, 사용자에게는 즉시 응답을 반환하는 비동기 파이프라인을 구축했습니다."
      },
      {
        title: "E. Gemini SDK 내부 캐싱 버그 해결",
        problem: "Gemini Python SDK가 내부적으로 요청을 캐싱하여, 서로 다른 텍스트에 대해 동일한 임베딩 벡터가 생성되는 치명적인 버그를 발견했습니다.",
        solution: "매 호출마다 새로운 클라이언트 인스턴스를 생성하여 SDK 레벨 캐싱을 차단하고, 구조화된 Contents 형식을 사용하여 객체 재사용을 방지했습니다."
      },
      {
        title: "F. 대화 맥락 유지 및 쿼리 재작성 (Query Rewriting)",
        problem: "멀티턴 대화에서 '그의 주요 프로젝트는?'과 같이 대명사가 포함된 질문은 검색 엔진이 대상을 찾지 못해 품질이 저하되었습니다.",
        solution: "이전 대화 히스토리를 분석하여 LLM이 질문을 '허경민의 주요 프로젝트는?'으로 재작성(Rewriting)한 후 검색 엔진에 전달하는 미들웨어를 구현했습니다."
      }
    ],
    insights: [
      "하이브리드 검색의 효과: 단일 검색 방식보다 벡터 + 키워드 결합이 한국어 문서에서 월등히 효과적임을 입증",
      "설계 패턴의 실질적 적용: Factory 패턴이 Multi-LLM 환경에서 유지보수성과 확장성에 기여함을 체감",
      "문맥 보존의 중요성: 청킹, 오버랩, 쿼리 재작성 등 문맥을 유지하는 것이 RAG 시스템 품질의 핵심"
    ]
  },
  {
    id: "p2",
    title: "Lumina (AI RAG 채팅 인터페이스)",
    period: "Personal Project",
    isPersonal: true,
    summary: "RAG 시스템 백엔드와 연동하는 Clean Architecture 기반의 AI 채팅 프론트엔드 및 백엔드 통합 프로젝트입니다.",
    techStack: ["React 19", "TypeScript", "Tailwind CSS", "Vite", "Custom Hooks"],
    role: "Frontend & Backend Integration (100%)",
    description: "RAG 시스템 백엔드와 연동하여 사용자에게 매끄러운 AI 채팅 경험을 제공하는 웹 애플리케이션입니다. React 19의 최신 기능과 TypeScript를 활용하여 안정성을 확보하고, 낙관적 업데이트 등 고급 UX 패턴을 적용했습니다.",
    keyAchievements: [
      "Clean Architecture 기반 3-Tier 레이어 분리 (UI, Logic, Data)로 유지보수성 확보",
      "LLM/RAG 듀얼 모드 아키텍처: ChatMode 타입 정의로 런타임 모드 전환 구현",
      "낙관적 업데이트(Optimistic Update) UX 패턴 적용으로 체감 응답 속도 개선",
      "대용량 PDF 업로드 처리를 위한 Axios 타임아웃 확장 및 진행률 시각화",
      "토큰 비용 실시간 추적 시스템 구현"
    ],
    architecture: [
      "UI Layer: React Components (Atomic Design Pattern 적용)",
      "Logic Layer: Custom Hooks (useChat, useUpload)로 비즈니스 로직 분리",
      "Data Layer: Axios Services & Interceptors (Error Handling, Timeout)",
      "State Management: Context API + React Hooks (Context Hell 방지를 위한 합성 패턴)"
    ],
    challenges: [
      {
        title: "A. 낙관적 업데이트(Optimistic Update)로 체감 지연 최소화",
        problem: "AI 응답을 기다리는 동안 사용자가 멈춰있는 화면을 보게 되어 대화의 흐름이 끊기는 사용자 경험(UX) 저하가 발생했습니다.",
        solution: "메시지 전송 즉시 UI에 가상 메시지를 먼저 렌더링하고, 백그라운드에서 실제 응답이 오면 상태를 동기화하는 낙관적 업데이트 패턴을 적용하여 체감 속도를 개선했습니다."
      },
      {
        title: "B. Clean Architecture 기반의 프론트엔드 설계",
        problem: "프로젝트 규모가 커짐에 따라 UI 컴포넌트 내부에 비즈니스 로직(API 호출, 상태 변경)이 강하게 결합되어 유지보수와 테스트가 어려워졌습니다.",
        solution: "UI(View) - Hooks(ViewModel) - Services(Model)로 계층을 명확히 분리하여, UI 컴포넌트는 오직 렌더링에만 집중하도록 리팩토링했습니다. 이로 인해 API 변경 시 서비스 계층만 수정하면 되는 유연성을 확보했습니다."
      },
      {
        title: "C. 대용량 PDF 업로드 시 UX 처리",
        problem: "RAG 분석을 위해 대용량 PDF 업로드 시 서버 처리 시간이 길어져 브라우저가 응답 없음으로 간주하거나 사용자가 이탈하는 문제가 있었습니다.",
        solution: "Axios의 onUploadProgress 이벤트를 활용하여 실시간 진행률(Progress Bar)을 시각화하고, 서버 타임아웃 설정을 동적으로 조정하여 안정적인 업로드를 지원했습니다."
      },
      {
        title: "D. 듀얼 모드(일반/RAG) 상태 관리",
        problem: "일반 LLM 채팅과 문서 기반 RAG 채팅 모드를 하나의 인터페이스에서 지원해야 했으나, 모드별 API 엔드포인트와 요청 파라미터 구조가 달라 코드 복잡도가 증가했습니다.",
        solution: "TypeScript의 Discriminated Unions을 활용하여 ChatMode 타입을 정의하고, 전략 패턴(Strategy Pattern)과 유사하게 모드에 따라 서비스 구현체를 동적으로 주입하는 구조를 설계했습니다."
      }
    ],
    insights: [
      "Separation of Concerns: 로직과 UI의 분리가 장기적인 프로젝트 유지보수성에 미치는 긍정적 영향 확인",
      "UX Driven Development: AI 서비스에서 응답 대기 시간(Latency)을 UX적으로 풀어내는 것이 기술적 최적화만큼 중요함을 체감",
      "Type Safety: 복잡한 비동기 데이터 흐름에서 TypeScript의 엄격한 타입 시스템이 런타임 에러를 획기적으로 줄여줌"
    ]
  },
  {
    id: "w1",
    title: "AI 실시간 회의록 - DADAM",
    company: "(주) 덱스컨설팅",
    period: "2024.04 ~ 2026.02",
    role: "PM / PL / 아키텍처 총괄",
    summary: "Azure Speech SDK와 생성형 AI를 활용한 실시간 다국어 음성 인식 및 자동 회의록 요약 솔루션입니다.",
    techStack: ["Python", "FastAPI", "Azure Speech SDK", "Azure OpenAI", "PowerApps (PCF)", "WebSocket"],
    keyAchievements: [
      "FastAPI와 WebSocket을 활용한 저지연(Low-Latency) PCM 음성 데이터 전송 아키텍처 구축",
      "최대 4개국어 실시간 동시 인식 및 번역 파이프라인 설계",
      "PowerApps 내 커스텀 PCF 컴포넌트 개발로 웹소켓 통신 구현",
      "효성, HY, Lotte 등 6개 이상의 대형 고객사 패키징 배포 및 상용화 성공",
      "언론 보도: AI 회의록 솔루션 '다담' 출시"
    ]
  },
  {
    id: "w2",
    title: "KT ESG POV - Scope 3 자동 산정 시스템",
    company: "(주) 덱스컨설팅",
    period: "2024.11 ~ 2025.03",
    role: "PL (솔루션 아키텍처)",
    summary: "KT의 복잡한 ESG 데이터를 Microsoft Sustainability Manager(MSM)로 통합하고 배출계수를 자동 산정하는 시스템입니다.",
    techStack: ["Microsoft Sustainability Manager", "Dataverse", "Power Automate", "Power Apps"],
    keyAchievements: [
      "Excel 기반 수기 관리를 시스템화하여 데이터 처리 효율성 및 정확도 제고",
      "PwC 검증 로직 기반의 Scope 3 전체 카테고리(1~15) 배출계수 자동 산정 프로세스 구축",
      "KT ESG POV Phase 1, 2 성공적 완수 및 MWC 2025 출품 지원"
    ]
  },
  {
    id: "w3",
    title: "AI 기업용 챗봇 (Assist)",
    company: "(주) 덱스컨설팅",
    period: "2024.01 ~ 2024.04",
    role: "Backend Dev / Assist",
    summary: "기업 내부 지식 기반의 RAG AI 챗봇 및 관리 시스템 구축 프로젝트입니다.",
    techStack: ["Python", "Flask", "Azure OpenAI", "PostgreSQL (pgvector)", "LangChain"],
    keyAchievements: [
      "RAG 파이프라인(Embeddings & Vector Store) 설계로 답변 정확도 확보",
      "OpenAI Assistants API를 활용한 멀티 턴 대화 상태 관리 및 스레드 최적화",
      "사이트별 독립적인 정책 관리 및 토큰 사용량 모니터링이 가능한 통합 어드민 개발",
      "실시간 비용 모니터링 로직 적용으로 운영 비용 최적화"
    ]
  },
  {
    id: "w4",
    title: "CTR AM/OE - CRM & 고객관리 PO 시스템",
    company: "(주) 클루커스",
    period: "2022.05 ~ 2024.04",
    role: "PL (Project Lead)",
    summary: "Salesforce 및 레거시 시스템을 MS Dynamics 365로 통합 및 이관하는 대규모 마이그레이션 프로젝트입니다.",
    techStack: ["Dynamics 365", "C#", "Azure Functions", "Power Platform"],
    keyAchievements: [
      "복잡한 영업 관리 프로세스를 Dynamics 365로 통합 및 이관 성공 (비즈니스 연속성 100% 보장)",
      "프로젝트 리딩을 통한 WBS 수립 및 기술 아키텍처 구체화",
      "MS-CTR 전략적 파트너십(MOU) 핵심 과제 성공적 완수"
    ]
  },
  {
    id: "w5",
    title: "Converse 사내 통합 마케팅 시스템",
    company: "(주) 커스토머인사이트",
    period: "2017.03 ~ 2022.01",
    role: "PL / 선임",
    summary: "외부 대행사 의존 시스템을 Dynamics 365 기반으로 내재화하여 마케팅 실행 속도 및 비용 효율성을 개선했습니다.",
    techStack: ["Dynamics 365", "ASP.NET MVC", "MSSQL", "RestAPI"],
    keyAchievements: [
      "분당 4,000건 처리가 가능한 고성능 발송 엔진 및 예약 스케줄러 개발",
      "Cafe24 및 카카오 알림톡 API 연동을 통한 커머스 연동형 마케팅 환경 완성",
      "올인원 마케팅 파이프라인 아키텍처 설계"
    ]
  },
  {
    id: "w6",
    title: "인터로조(Clalen) 멤버십 API 서버 구축",
    company: "(주) 커스토머인사이트",
    period: "2017.03 ~ 2022.01",
    role: "Backend Developer",
    summary: "제품 공급망 기반 멤버십 및 포인트 관리를 위한 전용 API 서버 구축 프로젝트입니다.",
    techStack: ["ASP.NET MVC", "MSSQL", "ASP.NET Identity", "RestAPI"],
    keyAchievements: [
      "토큰 기반 보안 모듈(ASP.NET Identity) 적용으로 안전한 API 통신 환경 구축",
      "회사 고유의 REST API 규격 수립 및 표준화 주도",
      "복잡한 멤버십/포인트 로직(적립, 차감, 쿠폰) API화 완료"
    ]
  },
  {
    id: "w7",
    title: "판타지 스포츠 게임 ZZMAGAMES",
    company: "(주) 플러시안",
    period: "2016.01 ~ 2016.09",
    role: "Full-stack Developer",
    summary: "KBO/MLB 기록 기반 판타지 스포츠 게임의 웹/앱 통합 결제 및 실시간 데이터 처리 시스템을 개발했습니다.",
    techStack: ["ASP.NET MVC", "Redis", "AngularJS", "MSSQL"],
    keyAchievements: [
      "Redis 기반 데이터 캐싱을 통한 실시간 게임 데이터 처리 성능 최적화",
      "대규모 이벤트(실시간 문자중계 등) 트래픽 처리를 위한 로직 구현",
      "통합 결제 시스템 및 본인인증 모듈 연동"
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    school: "가천대학교 글로벌캠퍼스",
    period: "2007.02 ~ 2013.03",
    degree: "컴퓨터미디어 (학사) - 졸업작품: Smart Network Monitoring System"
  },
  {
    school: "중동고등학교",
    period: "2000.02 ~ 2003.03",
    degree: "문과계열 졸업"
  }
];

export const CERTIFICATIONS = [
  "정보처리기사 (2012.11)",
  "MCP (Microsoft Certified Professional) (2022.09, 2022.03)"
];