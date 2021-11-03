class FeedParserError extends Error {
  constructor(message: string) {
    super(message);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, FeedParserError);
    }
  }
}

export default FeedParserError;
