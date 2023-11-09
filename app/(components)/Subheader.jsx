const SubHeader = (props) => {
  return (
    <section className="sub-header comm-titl-sec">
      <div className="myContainer">
        <div className="row">
          <div className="col-12 pad-0">
            <h1 className="title">{props.pagetitle}</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubHeader;
