import "./MediaPage.css";
import EBookIcon from "../../assets/icons/ebook.png";
import HeartIcon from "../../assets/icons/heart.png";
import ShareIcon from "../../assets/icons/share.png";
import { useParams } from "react-router";
import getBookById from "../../utils/getBookById";
import MediaPageTopHalf from "./MediaPageTopHalf/MediaPageTopHalf";
import MediaPageBottomHalf from "./MediaPageBottomHalf/MediaPageBottomHalf";
import { useEffect } from "react";

const MediaPage = () => {
  const { id } = useParams();

  const { authors, summary, tags, title, type } = getBookById(id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="media-page" style={{ paddingBottom: "200px" }}>
      <MediaPageTopHalf
        icon={null}
        type={type}
        title={title}
        authors={authors}
        id={id}
      />
      <MediaPageBottomHalf summary={summary} tags={tags} authors={authors} />
    </section>
  );
};

export default MediaPage;
