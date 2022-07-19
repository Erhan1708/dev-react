import React from 'react'

const ContentRight2 = () => {
  return (
		<div className="w3-col l4">
			<div class="w3-card w3-margin">
				<div class="w3-container w3-padding">
					<h4>Popular Posts</h4>
				</div>
				<ul class="w3-ul w3-hoverable w3-white">
					<li class="w3-padding-16">
						<img
							src="https://www.w3schools.com/w3images/workshop.jpg"
							alt=""
							className="w3-left w3-margin-right img2"
						/>
						<span class="w3-large">Lorem</span>
						<br />
						<span>Sed mattis nunc</span>
					</li>
					<li class="w3-padding-16">
						<img
							src="https://www.w3schools.com/w3images/gondol.jpg"
							alt=""
							className="w3-left w3-margin-right img2"
						/>
						<span class="w3-large">Ipsum</span>
						<br />
						<span>Praes tinci sed</span>
					</li>
					<li class="w3-padding-16">
						<img
							src="https://www.w3schools.com/w3images/skies.jpg"
							alt=""
							className="w3-left w3-margin-right img2"
						/>
						<span class="w3-large">Dorum</span>
						<br />
						<span>Ultricies congue</span>
					</li>
					<li class="w3-padding-16 w3-hide-medium w3-hide-small">
						<img
							src="https://www.w3schools.com/w3images/rock.jpg"
							alt=""
							className="w3-left w3-margin-right img2"
						/>
						<span class="w3-large">Mingsum</span>
						<br />
						<span>Lorem ipsum dipsum</span>
					</li>
				</ul>
			</div>
			<hr></hr>
		</div>
	);
}

export default ContentRight2