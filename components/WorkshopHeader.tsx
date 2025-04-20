type WorkshopHeaderProps = {
    title: string;
    description: string;
  };
  
  const WorkshopHeader = ({ title, description }: WorkshopHeaderProps) => (
<div className="taller-header" style={{ marginBottom: '2rem', border: 'none' }}>
  <h1 className="h32">Nombre del Taller</h1>
  <p className="p16" style={{ textAlign: 'center' }}>
    Descripción del taller para contextualizar la actividad.
  </p>
</div>

  );
  
  export default WorkshopHeader;
  