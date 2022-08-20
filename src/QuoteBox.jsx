/** @format */

import React from "react";
import "./QuoteBox.css";

function QuoteBox({ quote, setfetchNewQuote, fetchNewQuote }) {
	
	return (
		<div id="quote-box" className="card-body position-relative mt-5 mb-5">
			<div id="text" className="card-text font-weight-bold text-center">
				<h3>{quote.quote}</h3>
			</div>
			<div id="author" className="card-text p-2">
				 - {quote.author}
			</div>
			<br />
				<a id="tweet-quote" className="position-absolute bottom-0 start-0 "
        target={'_blank'}
        href={`https://twitter.com/intent/tweet?text=${quote.quote} - ${quote.author}`}>
					<i className="bi bi-twitter" style={{ fontSize: 30 }}></i>
				</a>
				<a
					id="tumblr-quote"
					className="position-absolute bottom-0 start-0"
          target={'_blank'}
          href='https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=${quote.quote}&content=${quote.quote}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'
				>
					<i className="bi bi-share" style={{ fontSize: 30 }}></i>
				</a>
				<div
					id="new-quote"
					href="#"
					className="btn btn-primary position-absolute bottom-0 end-0 "
					onClick={(e) => (
						e.preventDefault(), setfetchNewQuote(!fetchNewQuote)
					)}
				>
					New Quote
				</div>
			</div>
	);
}

export default QuoteBox;
