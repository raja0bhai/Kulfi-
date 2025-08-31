   const loveLetter = `
My Dearest,

You are the first person who has ever made my heart feel this way. I know I’m not perfect for you, and I’m not saying you have to choose me😊. I catch myself smiling at random moments just because your name crosses my mind. Maybe I’ll only ever be a small part of your story, but to me, you’ve already become my whole book🤗. I just want to say what’s in my heart, you are the only one for me who takes the same place as my mom and dad😌, and no one can ever take your place. 💌✨<3
`;

    const letterElement = document.getElementById("loveLetter");
    let index = 0;
    let fontSize = 1.8; // Initial font size in rem

    function typeLetter() {
      if (index < loveLetter.length) {
        letterElement.innerHTML += loveLetter[index];
        index++;

        // Gradually shrink the font size as the content grows
        if (index > loveLetter.length * 0.3) {
          fontSize -= 0.002; // Shrink rate (adjust for smoother transition)
          letterElement.style.fontSize = `${Math.max(fontSize, 1)}rem`; // Prevent shrinking below 1rem
        }

        setTimeout(typeLetter, 50); // Typing speed
      }
    }

    typeLetter();

    // Generate Stars
    const canvas = document.querySelector('.stars');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function drawStars() {
      const numStars = 200; // Number of stars
      for (let i = 0; i < numStars; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 2;
        const brightness = Math.random() * 0.8 + 0.2;

        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${brightness})`;
        ctx.fill();
      }
    }

    drawStars();

    // Twinkling Effect
    function twinkleStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawStars();
    }

    setInterval(twinkleStars, 1300); // Stars "twinkle" every second

    // Resize canvas on window resize
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawStars();
    });