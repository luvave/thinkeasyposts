import { Box, Text, Skeleton, Stack } from '@chakra-ui/react';
import { usePostsControllerGetAllPosts } from '../../generated/posts';
import PostCard from '../Posts/PostCard';
import Pagination from '../Posts/Pagination';
import React from 'react';

const PAGE_SIZE = 5;

const PostsList = () => {
  const { data, isLoading, isError, error } = usePostsControllerGetAllPosts();
  const [page, setPage] = React.useState(1);

  if (isLoading) {
    return (
      <Stack direction="column" gap={6} css={{ width: '100%' }}>
        {[...Array(5)].map((_, i) => (
          <Skeleton
            key={i}
            css={{ bg: 'bg.elevated', height: '10rem', borderRadius: '16px', width: '100%' }}
          />
        ))}
      </Stack>
    );
  }

  if (isError) {
    return (
      <Box
        css={{
          borderRadius: '8px',
          background: '#FFF5F5',
          color: '#C53030',
          padding: 16,
          fontWeight: 600,
        }}
      >
        {error instanceof Error ? error.message : 'Failed to load posts.'}
      </Box>
    );
  }

  if (!data || !data.length) {
    return (
      <Box
        css={{
          textAlign: 'center',
          paddingTop: 40,
          paddingBottom: 40,
          color: '#718096',
        }}
      >
        <Text css={{ fontSize: 20 }}>No posts found.</Text>
      </Box>
    );
  }

  const total = data.length;
  const start = (page - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const paginated = data.slice(start, end);

  return (
    <>
      <Stack direction="column" gap={8} css={{ height: '60vh', width: '100%', overflow: 'auto' }}>
        {paginated.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </Stack>
      <Pagination page={page} pageSize={PAGE_SIZE} total={total} onPageChange={setPage} />
    </>
  );
};

export default PostsList;
