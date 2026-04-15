const InCommonBookstore = () => {
  // 차별화 요소: 각 책에 어울리는 감성적인 문구(Lyric)를 추가
  const BOOKS = [
    {
      id: 1,
      title: "The Art of Silence",
      author: "Phoebe Sung",
      price: "24,000",
      cat: "Art",
      img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800",
      lyric: "침묵은 가장 강력한 언어입니다.",
    },
    {
      id: 2,
      title: "Minimal Life",
      author: "Kevin P.",
      price: "18,000",
      cat: "Lifestyle",
      img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800",
      lyric: "가장 적은 것으로 가장 풍요롭게.",
    },
    {
      id: 3,
      title: "Urban Space",
      author: "M. Kuma",
      price: "32,000",
      cat: "Architecture",
      img: "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=800",
      lyric: "우리가 머무는 공간이 우리를 만듭니다.",
    },
    {
      id: 4,
      title: "Static Study",
      author: "Elena Rossi",
      price: "21,000",
      cat: "Design",
      img: "https://images.unsplash.com/photo-1543003968-24ad6902796e?q=80&w=800",
      lyric: "정지된 순간 속에서 발견하는 아름다움.",
    },
    {
      id: 5,
      title: "Geometric Form",
      author: "Sara J.",
      price: "28,000",
      cat: "Art",
      img: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=800",
      lyric: "직선과 곡선이 만나는 지점의 기록.",
    },
    {
      id: 6,
      title: "Silence Archive",
      author: "Jane Do",
      price: "19,500",
      cat: "Fiction",
      img: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=800",
      lyric: "아무도 읽지 않은 문장들의 기록.",
    },
    {
      id: 7,
      title: "Context",
      author: "M. Rossi",
      price: "45,000",
      cat: "Arch",
      img: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=800",
      lyric: "맥락 속에서 의미를 찾다.",
    },
    {
      id: 8,
      title: "Void & Texture",
      author: "Adam P.",
      price: "38,000",
      cat: "Art",
      img: "https://images.unsplash.com/photo-1510771957249-cced0f90e941?q=80&w=800",
      lyric: "비어있음이 주는 단단한 질감.",
    },
  ];

  return (
    <div className="book-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Cormorant+Garamond:italic,wght@0,400;0,500;1,400&display=swap');

        .book-root { 
          background: #F7F6F3; color: #3D2D2A; /* 따뜻한 미색과 딥 브라운 텍스트 */
          font-family: 'Inter', sans-serif; -webkit-font-smoothing: antialiased;
        }

        /* --- In Common With 스타일 내비게이션 --- */
        .bk-nav {
          display: flex; justify-content: space-between; align-items: center;
          padding: 2rem 3rem; position: sticky; top: 0; background: #F7F6F3; z-index: 1000;
        }
        .bk-logo { font-family: 'Cormorant Garamond', serif; font-size: 1.8rem; font-weight: 500; letter-spacing: -0.01em; cursor: pointer; }
        .bk-nav-mid { display: flex; gap: 4rem; text-transform: uppercase; font-size: 0.65rem; letter-spacing: 0.2em; font-weight: 500; }
        .bk-nav-right { display: flex; gap: 2rem; text-transform: uppercase; font-size: 0.65rem; letter-spacing: 0.15em; opacity: 0.7; }

        /* --- 필터 바 (93 수치 및 라인 유지) --- */
        .bk-filter-row {
          display: flex; border-top: 1px solid #E2E2E2; border-bottom: 1px solid #E2E2E2;
          font-size: 0.65rem; text-transform: uppercase; letter-spacing: 0.1em;
        }
        .bk-filter-left { 
          width: 280px; padding: 1.2rem 3rem; border-right: 1px solid #E2E2E2; 
          display: flex; align-items: center; 
        }
        .bk-filter-left::before { content: '●'; font-size: 6px; margin-right: 0.8rem; }
        .bk-filter-right { 
          flex: 1; padding: 1.2rem 3rem; display: flex; justify-content: space-between; align-items: center;
        }
        .bk-total-num { font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: 1.4rem; text-transform: none; }

        /* --- 메인 레이아웃 --- */
        .bk-main { display: flex; }

        /* 사이드바 카테고리 (서점 데이터로 교체) */
        .bk-sidebar { width: 280px; padding: 3rem; border-right: 1px solid #E2E2E2; }
        .bk-side-section { margin-bottom: 3rem; }
        .bk-side-label { font-size: 0.6rem; opacity: 0.4; text-transform: uppercase; display: block; margin-bottom: 1rem; letter-spacing: 0.1em; }
        .bk-side-item { font-size: 0.85rem; line-height: 2.2; display: block; color: inherit; text-decoration: none; cursor: pointer; opacity: 0.7; transition: 0.3s; }
        .bk-side-item:hover { text-decoration: underline; opacity: 1; }
        .bk-side-item.active { font-weight: 600; text-decoration: underline; opacity: 1; }

        /* --- 상품 그리드 (차별화 요소: Lyric Hover) --- */
        .bk-grid { flex: 1; display: grid; grid-template-columns: repeat(4, 1fr); }
        .bk-card { 
          padding: 2.5rem; border-right: 1px solid #E2E2E2; border-bottom: 1px solid #E2E2E2;
          transition: background 0.5s cubic-bezier(0.16, 1, 0.3, 1); cursor: pointer; position: relative;
        }
        .bk-card:nth-child(4n) { border-right: none; }
        .bk-card:hover { background: #fff; }

        .bk-img-box { 
          width: 100%; aspect-ratio: 1/1.3; margin-bottom: 2.5rem; overflow: hidden; background: #EFEFEF; 
          position: relative;
        }
        .bk-img-box img { width: 100%; height: 100%; object-fit: cover; transition: 1.2s cubic-bezier(0.16, 1, 0.3, 1); }
        
        /* 차별화 요소: 이미지 위에 나타나는 감성 문구 */
        .bk-hover-lyric {
          position: absolute; top: 0; left: 0; width: 100%; height: 100%;
          background: rgba(255,255,255,0.85); display: flex; align-items: center; padding: 2rem;
          font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: 1.1rem;
          text-align: center; opacity: 0; transition: 0.6s;
        }
        .bk-card:hover .bk-hover-lyric { opacity: 1; }
        .bk-card:hover img { transform: scale(1.05) blur(2px); }

        .bk-info { margin-top: 1rem; }
        .bk-title { font-family: 'Cormorant Garamond', serif; font-size: 1.5rem; font-weight: 400; line-height: 1.1; margin-bottom: 0.5rem; }
        .bk-meta { display: flex; justify-content: space-between; font-size: 0.75rem; opacity: 0.5; text-transform: uppercase; letter-spacing: 0.05em; }

        /* 하단 배너 (쿠키 -> 서점 공지) */
        .bk-footer-banner { 
          position: fixed; bottom: 0; width: 100%; background: #3D2D2A; color: #F7F6F3; 
          padding: 0.8rem 3rem; font-size: 0.65rem; display: flex; justify-content: space-between; align-items: center;
          z-index: 2000; letter-spacing: 0.05em;
        }
      `}</style>

      {/* 1. Navigation */}
      <nav className="bk-nav">
        <div className="bk-logo">Sentiment Archive_</div>
        <div className="bk-nav-mid">
          <span>Journal</span>
          <span>Books</span>
          <span>Curation</span>
        </div>
        <div className="bk-nav-right">
          <span>Search</span>
          <span>Sign In</span>
          <span>Bag (0)</span>
        </div>
      </nav>

      {/* 2. Filter Row */}
      <div className="bk-filter-row">
        <div className="bk-filter-left">Collections</div>
        <div className="bk-filter-right">
          <div className="bk-total-num">
            Selected Library<sup>93</sup>
          </div>
          <div style={{ display: "flex", gap: "3rem", alignItems: "center" }}>
            <span>+ Filter By Genre</span>
            <div style={{ display: "flex", gap: "0.8rem", opacity: 0.3 }}>
              <span>View:</span>
              <span>S</span>
              <span style={{ fontWeight: 700, opacity: 1 }}>M</span>
              <span>L</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Main Content */}
      <main className="bk-main">
        <aside className="bk-sidebar">
          <div className="bk-side-section">
            <span className="bk-side-item active">● New Arrivals</span>
            <span className="bk-side-item">Staff Picks</span>
            <span className="bk-side-item">Rare & Vintage</span>
          </div>
          <div className="bk-side-section">
            <span className="bk-side-label">Genres</span>
            <span className="bk-side-item">Art & Design</span>
            <span className="bk-side-item">Philosophy</span>
            <span className="bk-side-item">Literature</span>
            <span className="bk-side-item">Architecture</span>
          </div>
          <div className="bk-side-section">
            <span className="bk-side-label">Archive</span>
            <span className="bk-side-item">Vol. 01 Spring</span>
            <span className="bk-side-item">Vol. 02 Summer</span>
          </div>
        </aside>

        <section className="bk-grid">
          {BOOKS.map((book) => (
            <div key={book.id} className="bk-card">
              <div className="bk-img-box">
                <img src={book.img} alt={book.title} />
                <div className="bk-hover-lyric">{book.lyric}</div>
              </div>
              <div className="bk-info">
                <h3 className="bk-title">{book.title}</h3>
                <div className="bk-meta">
                  <span>{book.author}</span>
                  <span>₩{book.price}</span>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>

      <div className="bk-footer-banner">
        <span>
          지금 가입하시면 첫 큐레이션 도서 배송료가 무료입니다. (Archive
          Membership)
        </span>
        <div style={{ display: "flex", gap: "1.5rem", cursor: "pointer" }}>
          <span style={{ textDecoration: "underline" }}>자세히 보기</span>
          <span style={{ fontWeight: 700 }}>닫기</span>
        </div>
      </div>
    </div>
  );
};

export default InCommonBookstore;
