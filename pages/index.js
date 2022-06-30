// pages/index.js
export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/Directoryapi");
  const Judges = await res.json();
  return {
    props: { Judges },
  };
};

export default function Judge({ Judges }) {
  return (
    <div>
      {Judges.map((p) => {
        return (
          <div key={p.PK_Judges_Judgename}>
            <p>
              {p.Judgename} — {p.Phone}
            </p>
          </div>
        );
      })}
    </div>
  );
}