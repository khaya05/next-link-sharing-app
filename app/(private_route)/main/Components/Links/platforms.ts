type PlatformOption = {
  value: string;
  label: string;
  icon?: string;
};

const platformOptions: PlatformOption[] = [
  { value: 'github', label: 'Github' },
  {
    value: 'frontendMentor',
    label: 'Frontend Mentor',
    icon: 'frontend-mentor',
  },
  { value: 'twitter', label: 'Twitter' },
  { value: 'linkedIn', label: 'LinkedIn', icon: 'linkedin' },
  { value: 'youtube', label: 'YouTube' },
  { value: 'facebook', label: 'Facebook' },
  { value: 'twitch', label: 'Twitch' },
  { value: 'dev.to', label: 'Dev.to', icon: 'devto' },
  { value: 'codewars', label: 'Codewars' },
  { value: 'codepen', label: 'Codepen' },
  { value: 'freeCodeCamp', label: 'freeCodeCamp', icon: 'freecodecamp' },
  { value: 'gitlab', label: 'GitLab' },
  { value: 'hashnode', label: 'Hasnode' },
  { value: 'stackOverflow', label: 'Stack Overflow', icon: 'stack-overflow' },
];
export default platformOptions