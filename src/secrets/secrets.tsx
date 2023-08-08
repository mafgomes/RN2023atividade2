import {useRef} from 'react';

export default function GetSetGitHubApiToken(value: string | null): string {
  let apiToken = useRef('');

  if (value !== null) {
    apiToken.current = value;
  }

  return apiToken.current;
}
