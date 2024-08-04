
import { ContactUs } from '../components/UI/ContactUs';



export default function AboutPage() {
  return (
    <>
      <div className="container mt-5 pt-5">
        <h2>What We Stand For</h2>
        <p>
          With a passion for excellence, we're dedicated to delivering
          results that exceed expectations. Our journey has been marked by a
          relentless pursuit of quality, where every project is
          approached with the highest standards in mind.
        </p>
        <section className="features-icons bg-light text-center m-4">
          <div className="container">
            <div className="row p-2">
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="bi-window m-auto text-primary" />
                  </div>
                  <h3>Peerless</h3>
                  <p className="lead mb-0">
                    Quality matched by no other.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="bi-layers m-auto text-primary" />
                  </div>
                  <h3>Polished</h3>
                  <p className="lead mb-0">
                    Refined to perfection, exuding sophistication.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="bi-terminal m-auto text-primary" />
                  </div>
                  <h3>Precise</h3>
                  <p className="lead mb-0">
                    Accuracy and detail that leave no room for error.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <p>
          Our commitment to maintaining pristine standards in everything we do is
          what sets us apart. Whether it’s in the intricacies of design, the
          meticulousness of execution, or the seamlessness of delivery, we ensure
          that every detail is polished and precise, resulting in outcomes that
          are truly peerless.
        </p>
        <p>
          If you would like us to call you, please leave us a message below and we will get in touch with you as soon as possible.
        </p>
        <ContactUs />
      </div>
    </>
  );
}
