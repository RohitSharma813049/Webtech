export function DecorativeElements() {
  return (
    <>
      {/* Floating gradient orbs - will-change for optimization */}
      <div className="fixed top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float pointer-events-none z-0 will-change-transform" />
      <div
        className="fixed top-40 right-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-float pointer-events-none z-0 will-change-transform"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="fixed bottom-20 left-1/4 w-36 h-36 bg-primary/5 rounded-full blur-3xl animate-float pointer-events-none z-0 will-change-transform"
        style={{ animationDelay: "4s" }}
      />
      <div
        className="fixed bottom-40 right-1/3 w-44 h-44 bg-accent/5 rounded-full blur-3xl animate-float pointer-events-none z-0 will-change-transform"
        style={{ animationDelay: "6s" }}
      />

      {/* Grid pattern overlay - simplified for performance */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.01]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />
    </>
  )
}
