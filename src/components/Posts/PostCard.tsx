import { Card, Heading, Text, Box } from '@chakra-ui/react';
import { PostResponse } from '../../generated/types/postResponse';

interface PostCardProps {
  post: PostResponse;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <Card.Root
      as="article"
      css={{
        minHeight: '15rem',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: 'bg.elevated',
        borderRadius: '1rem',
        boxShadow: 'var(--chakra-shadows-lg)',
        borderWidth: '1.5px',
        borderColor: 'var(--chakra-colors-brand-700)',
        overflow: 'hidden',
        transition: 'box-shadow 0.2s, background 0.2s',
        backdropFilter: 'blur(8px)',
        ':hover': {
          boxShadow: 'var(--chakra-shadows-2xl)',
          background: 'var(--chakra-colors-bg-hover)',
        },
      }}
    >
      <Card.Header
        css={{
          padding: '1.25rem 1rem 0.25rem 1rem',
          display: 'flex',
          alignItems: 'start',
          gap: '0.75rem',
        }}
      >
        {post.authorId && (
          <Box css={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Box
              css={{
                borderRadius: '9999px',
                background: 'var(--chakra-colors-accent-600)',
                color: 'white',
                width: '2rem',
                height: '2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                fontSize: '1.125rem',
                flexShrink: 0,
              }}
            >
              {post.authorId[0].toUpperCase()}
            </Box>
            <Text
              css={{
                fontWeight: 700,
                color: 'var(--chakra-colors-text-primary)',
                fontSize: '0.95rem',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
              title={post.authorId}
            >
              {post.authorId}
            </Text>
          </Box>
        )}
        <Box css={{ minWidth: 0, flex: 1 }}>
          <Text
            css={{
              color: 'var(--chakra-colors-text-muted)',
              fontSize: '0.8rem',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
            title={post.createdAt ? new Date(post.createdAt).toLocaleDateString() : ''}
          >
            {post.createdAt ? new Date(post.createdAt).toLocaleDateString() : ''}
          </Text>
        </Box>
      </Card.Header>
      <Card.Body
        css={{
          padding: '0.25rem 1rem 0.25rem 1rem',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Heading
          as="h2"
          css={{
            fontSize: '1.15rem',
            color: 'accent.500',
            fontWeight: 800,
            marginBottom: '0.5rem',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
          title={post.title}
        >
          {post.title}
        </Heading>
        <Text
          css={{
            color: 'text.primary',
            fontSize: '0.97rem',
            marginBottom: '0.25rem',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {post.content || 'No content available.'}
        </Text>
      </Card.Body>
      <Card.Footer
        css={{
          padding: '0.25rem 1rem 1.25rem 1rem',
        }}
      />
    </Card.Root>
  );
};

export default PostCard;
