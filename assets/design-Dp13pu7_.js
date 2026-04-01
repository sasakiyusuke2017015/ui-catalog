function a(r){switch(r){case"wood":return{backgroundColor:"#e8d4b8",backgroundImage:`
          linear-gradient(90deg,
            rgba(180, 130, 70, 0.08) 0%,
            rgba(160, 110, 60, 0.12) 20%,
            rgba(140, 95, 50, 0.06) 40%,
            rgba(170, 120, 65, 0.10) 60%,
            rgba(150, 105, 55, 0.08) 80%,
            rgba(180, 130, 70, 0.08) 100%
          ),
          linear-gradient(180deg,
            rgba(120, 80, 40, 0.03) 0%,
            rgba(100, 70, 35, 0.05) 25%,
            rgba(130, 90, 45, 0.02) 50%,
            rgba(110, 75, 40, 0.04) 75%,
            rgba(120, 80, 40, 0.03) 100%
          ),
          repeating-linear-gradient(
            87deg,
            transparent 0px,
            transparent 2px,
            rgba(100, 60, 25, 0.04) 2px,
            rgba(100, 60, 25, 0.04) 3px,
            transparent 3px,
            transparent 8px
          ),
          repeating-linear-gradient(
            93deg,
            transparent 0px,
            transparent 3px,
            rgba(90, 55, 20, 0.03) 3px,
            rgba(90, 55, 20, 0.03) 4px,
            transparent 4px,
            transparent 12px
          )
        `};case"flooring":return{backgroundColor:"#f5ddb8",backgroundImage:`
          linear-gradient(90deg, rgba(139, 90, 43, 0.15) 2px, transparent 2px),
          linear-gradient(rgba(139, 90, 43, 0.1) 2px, transparent 2px),
          repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(101, 67, 33, 0.15) 35px, rgba(101, 67, 33, 0.15) 70px),
          repeating-linear-gradient(-45deg, transparent, transparent 35px, rgba(101, 67, 33, 0.12) 35px, rgba(101, 67, 33, 0.12) 70px)
        `,backgroundSize:"80px 80px, 80px 80px, 140px 140px, 140px 140px",backgroundPosition:"0 0, 0 0, 0 0, 0 0"};case"fabric":return{backgroundColor:"#f0ede8",backgroundImage:`
          repeating-linear-gradient(
            0deg,
            transparent 0px,
            transparent 1px,
            rgba(80, 70, 60, 0.06) 1px,
            rgba(80, 70, 60, 0.06) 2px
          ),
          repeating-linear-gradient(
            90deg,
            transparent 0px,
            transparent 1px,
            rgba(80, 70, 60, 0.06) 1px,
            rgba(80, 70, 60, 0.06) 2px
          ),
          repeating-linear-gradient(
            45deg,
            transparent 0px,
            transparent 4px,
            rgba(60, 50, 40, 0.02) 4px,
            rgba(60, 50, 40, 0.02) 8px
          )
        `,backgroundSize:"4px 4px, 4px 4px, 12px 12px"};case"concrete":return{backgroundColor:"#e8e4df",backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100' viewBox='0 0 56 100'%3E%3Crect fill='%23e8e4df' width='56' height='100'/%3E%3Cpath d='M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100' fill='none' stroke='%23c9c4be' stroke-width='1'/%3E%3Cpath d='M28 0L28 34L0 50L0 84L28 100L56 84L56 50L28 34' fill='none' stroke='%23d4d0ca' stroke-width='0.5'/%3E%3C/svg%3E")`,backgroundSize:"56px 100px"};case"leather":return{backgroundColor:"#fdfcfa",backgroundImage:`
          repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(180, 150, 120, 0.02) 3px, rgba(180, 150, 120, 0.02) 6px),
          repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(180, 150, 120, 0.02) 3px, rgba(180, 150, 120, 0.02) 6px),
          radial-gradient(circle at 15% 30%, rgba(200, 170, 140, 0.015) 0%, transparent 40%),
          radial-gradient(circle at 85% 60%, rgba(200, 170, 140, 0.015) 0%, transparent 40%),
          radial-gradient(circle at 50% 80%, rgba(200, 170, 140, 0.01) 0%, transparent 30%)
        `};case"marble":return{backgroundColor:"#e8f0ec"};case"cream":return{backgroundColor:"#f7f4ef"};case"lavender":return{backgroundColor:"#f0eef5"};case"sky":return{backgroundColor:"#edf4f8"};default:return{backgroundColor:"#f5f5f5"}}}const e={primary:"#6366F1",info:"#3B82F6",success:"#10B981",warning:"#F59E0B",danger:"#EF4444"};export{e as S,a as g};
