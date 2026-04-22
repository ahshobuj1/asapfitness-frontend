export type TProgram = {
  id: string;
  title: string;
  description: string;
  thumbnailKey: string;
  totalClasses: number;
  createdAt: string;
  updatedAt: string;
  _count: {
    classes: number;
  };
  thumbnailUrl: string;
};
