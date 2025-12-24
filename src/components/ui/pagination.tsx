import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-2 py-8 font-mono text-sm sm:gap-4">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="min-h-[44px] min-w-[44px] text-foreground-muted hover:text-foreground disabled:opacity-40 sm:min-h-0 sm:min-w-0"
      >
        <span className="hidden sm:inline">← prev</span>
        <span className="sm:hidden">←</span>
      </Button>

      <div className="flex items-center gap-1 sm:gap-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-sm border transition-colors active:scale-95 sm:h-8 sm:w-8",
              page === currentPage
                ? "border-accent bg-accent text-accent-foreground"
                : "border-transparent text-foreground-muted hover:bg-muted hover:text-foreground"
            )}
          >
            {page}
          </button>
        ))}
      </div>

      <Button
        variant="ghost"
        size="sm"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="min-h-[44px] min-w-[44px] text-foreground-muted hover:text-foreground disabled:opacity-40 sm:min-h-0 sm:min-w-0"
      >
        <span className="hidden sm:inline">next →</span>
        <span className="sm:hidden">→</span>
      </Button>
    </div>
  );
}

