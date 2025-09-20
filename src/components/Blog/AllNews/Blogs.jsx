import Link from 'next/link';

const Blogs = ({ blogs, isWide, style, rtl }) => {
  return (
    <div className={isWide ? 'col-lg-10':'col-lg-8'}>
      {
        blogs.map((blog, index) => (
          <div className={`card border-0 bg-transparent rounded-0 ${index !== blogs.length - 1 ? 'border-bottom brd-gray':'mb-lg-0 pb-lg-0'} pb-30 mb-30`} key={index}>
            <div className="row">
              <div className="col-lg-5">
                <div className="img img-cover">
                  <img src={blog.cover} className="radius-7" alt="..." />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="card-body p-0">
                  <small className="d-block date text">
                    <a href="#" className={`text-uppercase border-end brd-gray pe-3 me-3 color-blue${style} fw-bold`}>{ blog.type }</a>
                    <i className="bi bi-clock me-1"></i>
                    <a href="#" className="op-8">{ blog.time }</a>
                  </small>
                  <Link href={ rtl ? "/rtl-page-single-post" : "/page-single-post-5" }>
                    <a className="card-title mb-10">{ blog.title }</a>
                  </Link>
                  <p className="fs-13px color-666">{ blog.desc } [...]</p>
                  <div className="auther-comments d-flex small align-items-center justify-content-between op-9">
                    <div className="l_side d-flex align-items-center">
                      <span className={`icon-10 rounded-circle d-inline-flex justify-content-center align-items-center text-uppercase bg-blue${style} p-2 me-2 text-white`}>
                        { blog.userImgLetter }
                      </span>
                      <a href="#">
                        <small className="text-muted">{ rtl ? 'بواسطة' : 'By' }</small> { blog.username }
                      </a>
                    </div>
                    <div className="r-side mt-1">
                      <i className="bi bi-chat-left-text me-1"></i>
                      <a href="#">{ blog.comments }</a>
                      <i className="bi bi-eye ms-4 me-1"></i>
                      <a href="#">{ blog.views }</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      }

      <div className={`pagination style-5 color-${style} justify-content-center mt-60`}>
        <a href="#" className="active">
          <span>1</span>
        </a>
        <a href="#">
          <span>2</span>
        </a>
        <a href="#">
          <span>3</span>
        </a>
        <a href="#">
          <span>4</span>
        </a>
        <a href="#">
          <span>...</span>
        </a>
        <a href="#">
          <span>20</span>
        </a>
        <a href="#">
          <span className="text">{ rtl ? "التالي" : "next" } <i className="fas fa-chevron-right"></i> </span>
        </a>
      </div>
    </div>
  )
}

export default Blogs