const reveals = document.querySelectorAll(".reveal");
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in-view");
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -60px 0px" },
      );
      reveals.forEach((el) => obs.observe(el));

      const skillsGrid = document.getElementById("skills-grid");
      const skillsObs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              skillsGrid.classList.add("skills-in-view");
            }
          });
        },
        { threshold: 0.2 },
      );
      skillsObs.observe(skillsGrid);