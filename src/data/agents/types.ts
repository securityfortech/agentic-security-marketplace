
// Make sure the Agent interface is exported
export interface AgentSkill {
  name: string;
  level: 'beginner' | 'intermediate' | 'expert';
}

export interface Agent {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  avatar?: string;
  status: 'active' | 'inactive';
  features: string[];
  creator?: string;
  interactions: number;
  type: string;
  image: string;
  title?: string;
  skills?: AgentSkill[];
  featured?: boolean;
}
