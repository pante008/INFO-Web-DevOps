function PanelPage() {
  return (
    <div className="panel-page">
      <h2>Cat's Looking At You</h2>
      <div className="panel">
        <div className="panel-text">
          <h3>The Relaxed Tabby</h3>
          <p>A classic tabby cat lounging in what appears to be a comfortable indoor setting. The cat displays the characteristic striped pattern of a tabby, with beautiful grey and black markings. Its posture suggests complete relaxation and contentment, embodying the casual elegance that cats are known for. The lighting captures the subtle variations in its fur pattern, highlighting the natural beauty of its tabby markings.</p>
        </div>
        <div className="panel-image">
          <img src="src/assets/image1.jpg" alt="brown black cat comfortably looking at you" />
        </div>
      </div>
      <div className="panel">
        <div className="panel-image">
          <img src="src/assets/image2.jpg" alt="The snow brown colored cat looking at you" />
        </div>
        <div className="panel-text">
          <h3>The Regal Orange and White Cat</h3>
          <p>A stunning close-up portrait of a majestic orange and white cat with striking facial features. The cat appears to have a distinctive bi-colored pattern, with rich orange markings on its face contrasted by clean white fur. Its expression is alert and dignified, with bright, engaging eyes that seem to look directly at the camera.</p>
        </div>
      </div>
    </div>
  );
}

export default PanelPage;