

const Brand = ({ brand }) => {
    const{photo,Name,description} = brand;
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                <figure><img className="h-[250px]" src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {Name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Brand;