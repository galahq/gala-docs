#!/bin/bash
# Expects ./build to already exist (built by the CI build job, or `yarn build` locally).
set -euo pipefail
aws s3 sync --acl public-read --sse --delete ./build/ \
  s3://docs.learngala.com
aws cloudfront create-invalidation --distribution-id E2EDUP84FXRXCP --paths '/*'
