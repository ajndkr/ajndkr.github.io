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
    <div className="flex items-center justify-center gap-4 py-8 font-mono text-sm">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="text-foreground-muted hover:text-foreground disabled:opacity-40"
      >
        ← prev
      </Button>

      <div className="flex items-center gap-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-sm border transition-colors",
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
        className="text-foreground-muted hover:text-foreground disabled:opacity-40"
      >
        next →
      </Button>
    </div>
  );
}

