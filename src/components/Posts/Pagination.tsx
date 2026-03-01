import { Pagination, ButtonGroup, IconButton } from '@chakra-ui/react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface PaginationProps {
  page: number;
  pageSize: number;
  total: number;
  onPageChange: (page: number) => void;
}

const CustomPagination = ({ page, pageSize, total, onPageChange }: PaginationProps) => {
  const pageCount = Math.ceil(total / pageSize);
  if (pageCount <= 1) return null;

  return (
    <Pagination.Root
      page={page}
      count={total}
      pageSize={pageSize}
      onPageChange={({ page }) => onPageChange(page)}
      css={{
        width: '100%',
        marginTop: 10,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <ButtonGroup
        css={{
          gap: '0.25rem',
          background: 'var(--chakra-colors-bg-elevated)',
          borderRadius: '0.75rem',
          padding: '0.25rem 0.5rem',
          boxShadow: 'var(--chakra-shadows-md)',
        }}
        size="md"
      >
        <Pagination.PrevTrigger asChild>
          <IconButton
            aria-label="Previous page"
            css={{
              background: 'transparent',
              color: 'var(--chakra-colors-accent-500)',
              border: 'none',
              _hover: { background: 'var(--chakra-colors-bg-hover)' },
              _focus: { boxShadow: 'none' },
            }}
            tabIndex={-1}
          >
            <FiChevronLeft />
          </IconButton>
        </Pagination.PrevTrigger>
        <Pagination.Items
          render={(page) => (
            <IconButton
              css={{
                background: 'transparent',
                color: 'text.primary',
                minWidth: '2.25rem',
                minHeight: '2.25rem',
                _selected: {
                  bg: 'accent.500',
                  color: 'brand.700',
                },
                _focus: { boxShadow: 'none' },
                transition: 'all 0.15s',
              }}
              variant={{ base: 'ghost', _selected: 'outline' }}
            >
              {page.value}
            </IconButton>
          )}
        />
        <Pagination.NextTrigger asChild>
          <IconButton
            aria-label="Next page"
            css={{
              background: 'transparent',
              color: 'var(--chakra-colors-accent-500)',
              border: 'none',
              _hover: { background: 'var(--chakra-colors-bg-hover)' },
              _focus: { boxShadow: 'none' },
            }}
            tabIndex={-1}
          >
            <FiChevronRight />
          </IconButton>
        </Pagination.NextTrigger>
      </ButtonGroup>
    </Pagination.Root>
  );
};

export default CustomPagination;
