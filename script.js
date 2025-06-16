window.addEventListener("load", () => {
	const logoScreen     = document.getElementById("logoScreen");
	const mainContent    = document.getElementById("mainContent");
	const typewriterText = document.getElementById("typewriterText");
	const languageButtons= document.getElementById("languageButtons");
  
	// ロゴのフェードアウト後にメインコンテンツを表示
	setTimeout(() => {
	  logoScreen.style.opacity = 0;
	  setTimeout(() => {
		logoScreen.style.display = "none";
  
		// main-content をまず表示（opacity は 0 のまま）
		mainContent.classList.remove("hidden");
  
		// 少しタイミングをずらして「visible」を付与し、CSS transition でフェードイン
		setTimeout(() => {
		  mainContent.classList.add("visible");
		}, 50);  // 50ms ずらすと確実に transition が効きます
  
		// タイピングをスタート
		startTypewriter("Takuho's portfolio page", typewriterText, () => {
		  // タイピング終了後にボタン表示
		  languageButtons.classList.remove("hidden");
		});
	  }, 1000);
	}, 2000);
  });
  

  function startTypewriter(text, element, callback) {
	let index = 0;
	const speed = 100;
  
	function typeChar() {
	  if (index < text.length) {
		element.textContent += text.charAt(index);
		index++;
		setTimeout(typeChar, speed);
	  } else {
		if (callback) callback();
	  }
	}
  
	typeChar();
  }
  