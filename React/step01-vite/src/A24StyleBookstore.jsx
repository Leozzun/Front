import React, { useState } from "react";

const WarmLibrary = () => {
  // 1. 데이터 구조 (백엔드 DB 설계 시 참고하세요)
  const [myBooks, setMyBooks] = useState([
    {
      id: 1,
      title: "오후의 햇살 아래서",
      author: "김서점",
      totalPage: 320,
      currentPage: 184, // 진행률 계산용
      status: "Reading", // Reading, Completed
      lastRead: "2026.04.19",
      memo: "창가에서 읽기 딱 좋은 문장들. 커피와 잘 어울린다.",
      img: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=800",
    },
    {
      id: 2,
      title: "숲이 들려주는 말",
      author: "이그린",
      totalPage: 280,
      currentPage: 280,
      status: "Completed",
      lastRead: "2026.03.15",
      memo: "초록색 위로가 필요할 때마다 꺼내보고 싶은 책.",
      img: "https://images.unsplash.com/photo-1550399105-c4db5fb85c18?q=80&w=800",
    },
  ]);

  return (
    <div className="warm-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700&family=Noto+Serif+KR:wght@200;400;700&display=swap');

        .warm-root {
          background-color: #F8F5F2;
          color: #4A443F;
          font-family: 'Noto Serif KR', serif;
          min-height: 100vh;
          padding-bottom: 5rem;
          -webkit-font-smoothing: antialiased;
        }

        /* 헤더 & 히어로 */
        .warm-header { padding: 3rem 4rem; display: flex; justify-content: space-between; align-items: center; }
        .warm-logo { font-family: 'Nanum Myeongjo', serif; font-size: 1.5rem; font-weight: 700; color: #8C7867; }
        .warm-hero { padding: 2rem 4rem; text-align: center; }
        .warm-hero h1 { font-family: 'Nanum Myeongjo', serif; font-size: 2.2rem; color: #5D544D; }

        .container { max-width: 1000px; margin: 0 auto; padding: 2rem; }
        .section-label { font-size: 0.8rem; font-weight: 700; color: #8C7867; letter-spacing: 0.2em; margin-bottom: 2rem; display: block; border-bottom: 1px solid #E5E0D8; padding-bottom: 0.5rem;}

        /* 2. 현재 읽는 책 (대시보드 스타일) */
        .reading-now {
          background: #fff; border-radius: 20px; padding: 2.5rem;
          display: flex; gap: 3rem; box-shadow: 0 15px 35px rgba(74, 68, 63, 0.05);
          margin-bottom: 4rem; position: relative; overflow: hidden;
        }
        .reading-now::after { 
          content: ''; position: absolute; top: 0; right: 0; 
          width: 100px; height: 100px; background: #FAF7F2; 
          transform: rotate(45deg) translate(50%, -50%); 
        }

        .book-cover-main { width: 180px; border-radius: 8px; box-shadow: 10px 15px 30px rgba(0,0,0,0.1); }
        
        .book-info-main { flex: 1; }
        .status-badge { font-size: 0.7rem; background: #E8E2DA; color: #8C7867; padding: 4px 12px; border-radius: 20px; font-weight: 700; }
        
        /* 진행률 표시 */
        .progress-box { margin: 2rem 0; }
        .progress-text { display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 0.8rem; opacity: 0.8; }
        .bar-bg { background: #F0EDE8; height: 8px; border-radius: 10px; }
        .bar-fill { 
          background: #8C7867; height: 100%; border-radius: 10px;
          width: ${(myBooks[0].currentPage / myBooks[0].totalPage) * 100}%; 
          transition: width 1.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* 상세 정보 그리드 */
        .detail-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-top: 1.5rem; }
        .detail-item { background: #FBF9F7; padding: 1rem; border-radius: 12px; text-align: center; }
        .detail-label { font-size: 0.65rem; opacity: 0.5; display: block; margin-bottom: 0.3rem; }
        .detail-value { font-size: 0.9rem; font-weight: 600; }

        /* 한 줄 메모 (포스트잇 느낌) */
        .memo-box { 
          margin-top: 2rem; padding: 1.2rem; background: #FFFDF0; 
          border-left: 4px solid #F2E8A5; font-style: italic; font-size: 0.9rem;
          color: #6B645E; line-height: 1.6;
        }

        /* 3. 독서 캘린더 & 완독 리스트 (미니멀) */
        .sub-grid { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 2rem; }
        .calendar-card { background: #fff; border-radius: 20px; padding: 2rem; box-shadow: 0 10px 25px rgba(0,0,0,0.03); }
        .cal-header { display: flex; justify-content: space-between; margin-bottom: 1.5rem; font-weight: 700; }
        .cal-days { display: grid; grid-template-columns: repeat(7, 1fr); gap: 10px; text-align: center; }
        .day { font-size: 0.75rem; padding: 8px; border-radius: 8px; background: #F8F5F2; color: #BCB4AD; }
        .day.active { background: #8C7867; color: #fff; } /* 독서한 날 */

        .completed-list { display: flex; flex-direction: column; gap: 1rem; }
        .comp-item { display: flex; gap: 1rem; align-items: center; background: rgba(255,255,255,0.5); padding: 10px; border-radius: 12px; }
        .comp-img { width: 50px; height: 70px; object-fit: cover; border-radius: 4px; }

        .action-btn {
          margin-top: 2rem; width: 100%; padding: 1rem; 
          background: #8C7867; color: #fff; border: none; border-radius: 12px;
          font-family: inherit; font-weight: 700; cursor: pointer; transition: 0.3s;
        }
        .action-btn:hover { background: #6F5F52; transform: translateY(-2px); }

        .warm-leaf { position: fixed; bottom: 5%; right: 3%; width: 120px; opacity: 0.1; pointer-events: none; }
      `}</style>

      <nav className="warm-header">
        <div className="warm-logo">숨, 서재</div>
        <div style={{ fontSize: "0.9rem", opacity: 0.6 }}>
          2026년 4월 20일, 기록의 밤
        </div>
      </nav>

      <header className="warm-hero">
        <h1>나의 문장들, 나의 시간</h1>
      </header>

      <main className="container">
        {/* --- 1. 현재 읽는 책 (대시보드) --- */}
        <span className="section-label">CURRENTLY READING</span>
        <section className="reading-now">
          <img src={myBooks[0].img} className="book-cover-main" alt="cover" />
          <div className="book-info-main">
            <span className="status-badge">읽는 중</span>
            <h2
              style={{
                fontFamily: "Nanum Myeongjo",
                fontSize: "2rem",
                margin: "0.8rem 0",
              }}
            >
              {myBooks[0].title}
            </h2>

            <div className="progress-box">
              <div className="progress-text">
                <span>진행률</span>
                <span>
                  {myBooks[0].currentPage} / {myBooks[0].totalPage} p (
                  {Math.floor(
                    (myBooks[0].currentPage / myBooks[0].totalPage) * 100,
                  )}
                  %)
                </span>
              </div>
              <div className="bar-bg">
                <div className="bar-fill"></div>
              </div>
            </div>

            <div className="detail-grid">
              <div className="detail-item">
                <span className="detail-label">마지막 기록</span>
                <span className="detail-value">{myBooks[0].lastRead}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">책갈피</span>
                <span className="detail-value">{myBooks[0].currentPage} p</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">남은 분량</span>
                <span className="detail-value">
                  {myBooks[0].totalPage - myBooks[0].currentPage} p
                </span>
              </div>
            </div>

            <div className="memo-box">"{myBooks[0].memo}"</div>

            <button className="action-btn">오늘의 독서 체크 (기록하기)</button>
          </div>
        </section>

        {/* --- 2. 캘린더 & 완독 리스트 --- */}
        <div className="sub-grid">
          <div>
            <span className="section-label">READING CALENDAR</span>
            <div className="calendar-card">
              <div className="cal-header">
                <span>4월</span>
                <span style={{ fontSize: "0.8rem", opacity: 0.5 }}>
                  연속 5일째 독서 중
                </span>
              </div>
              <div className="cal-days">
                {[...Array(30)].map((_, i) => (
                  <div
                    key={i}
                    className={`day ${[15, 16, 17, 18, 19, 20].includes(i + 1) ? "active" : ""}`}
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <span className="section-label">COMPLETED</span>
            <div className="completed-list">
              {myBooks
                .filter((b) => b.status === "Completed")
                .map((book) => (
                  <div key={book.id} className="comp-item">
                    <img src={book.img} className="comp-img" alt="c" />
                    <div>
                      <div style={{ fontSize: "0.85rem", fontWeight: 700 }}>
                        {book.title}
                      </div>
                      <div style={{ fontSize: "0.7rem", opacity: 0.5 }}>
                        {book.lastRead} 완독
                      </div>
                    </div>
                  </div>
                ))}
              <div
                style={{
                  textAlign: "center",
                  padding: "1rem",
                  border: "1px dashed #D1C9C0",
                  borderRadius: "12px",
                  fontSize: "0.8rem",
                  opacity: 0.5,
                }}
              >
                + 새로운 책 추가하기
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer
        style={{
          textAlign: "center",
          padding: "4rem",
          opacity: 0.3,
          fontSize: "0.8rem",
        }}
      >
        © 2026 SOOM ARCHIVE. 당신의 모든 페이지를 응원합니다.
      </footer>

      <img
        src="https://cdn-icons-png.flaticon.com/512/2926/2926359.png"
        alt="leaf"
        className="warm-leaf"
      />
    </div>
  );
};

export default WarmLibrary;
