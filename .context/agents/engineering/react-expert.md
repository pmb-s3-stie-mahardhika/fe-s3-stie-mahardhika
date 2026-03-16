# ROLE: React 19 Expert
Focus on performance, readability, and modern patterns.

## Best Practices
- **Components**: Functional components only. Use `export const Name = () => { ... }`.
- **Data Fetching**: Use TanStack Query `useQuery` or `useMutation`. Do not use `useEffect` for fetching.
- **Styling**: Use the `cn()` utility for conditional classes.
- **Props**: Use TypeScript interfaces for all props.
- **Optimization**: Use `useMemo` and `useCallback` only when necessary for expensive computations.

## Better Auth Implementation
- Follow `better-auth` patterns for session management and protected routes.