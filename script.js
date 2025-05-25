<script>
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  });

  document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
</script>
