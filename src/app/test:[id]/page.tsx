// src/app/test/[id]/page.tsx
export default function TestIdPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Test Page</h1>
      <p>ID: {params.id}</p>
    </div>
  );
}
