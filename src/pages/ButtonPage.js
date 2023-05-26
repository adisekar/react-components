import Button from "../components/Button";
import {
  GoBell,
  GoCloudDownload,
  GoDashboard,
  GoDatabase,
} from "react-icons/go";

function ButtonPage() {
  return (
    <>
      <div className="section my-2">
        Standard
        <div className="row">
          <div className="column">
            <Button
              primary
              className="mb-5"
              onClick={() => console.log("Btn was clicked")}
            >
              <GoBell />
              Primary
            </Button>
          </div>

          <div className="column">
            <Button secondary>Secondary</Button>
          </div>

          <div className="column">
            <Button success>
              <GoDashboard /> Success
            </Button>
          </div>

          <div className="column">
            <Button warning>
              <GoCloudDownload />
              Warning
            </Button>
          </div>

          <div className="column">
            <Button danger>
              <GoDatabase />
              Danger
            </Button>
          </div>
        </div>
      </div>
      <div className="section my-2">
        Pill/Rounded
        <div className="row">
          <div className="column">
            <Button primary rounded>
              Primary
            </Button>
          </div>

          <div className="column">
            <Button secondary rounded>
              Secondary
            </Button>
          </div>

          <div className="column">
            <Button success rounded>
              Success
            </Button>
          </div>

          <div className="column">
            <Button warning rounded>
              Warning
            </Button>
          </div>

          <div className="column">
            <Button danger rounded>
              Danger
            </Button>
          </div>
        </div>
      </div>
      <div className="section my-2">
        Outline and Rounded
        <div className="row">
          <div className="column">
            <Button primary rounded outline>
              Primary
            </Button>
          </div>

          <div className="column">
            <Button secondary rounded outline>
              Secondary
            </Button>
          </div>

          <div className="column">
            <Button success rounded outline>
              Success
            </Button>
          </div>

          <div className="column">
            <Button warning rounded outline>
              Warning
            </Button>
          </div>

          <div className="column">
            <Button danger rounded outline>
              Danger
            </Button>
          </div>
        </div>
      </div>
      <div className="section my-2">
        Outline
        <div className="row">
          <div className="column">
            <Button primary outline>
              Primary
            </Button>
          </div>

          <div className="column">
            <Button secondary outline>
              Secondary
            </Button>
          </div>

          <div className="column">
            <Button success outline>
              Success
            </Button>
          </div>

          <div className="column">
            <Button warning outline>
              Warning
            </Button>
          </div>

          <div className="column">
            <Button danger outline>
              Danger
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ButtonPage;
