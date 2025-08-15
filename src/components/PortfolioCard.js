export default function PortfolioCard({ img, title, desc, footer }){
  return (
    <div className="card card-hover h-100">
      <img src={img} className="card-img-top" alt={title} />
      <div className="card-body">
        <h6 className="card-title text-center fw-bold">{title}</h6>
        <p className="card-text text-center small text-muted">{desc}</p>
        <div className="text-center">
          <button type="button" className="btn btn-primary btn-sm btn-lighten">
            Voir le site
          </button>
        </div>
      </div>
      {footer && <div className="card-footer text-center small text-muted">{footer}</div>}
    </div>
  );
}
