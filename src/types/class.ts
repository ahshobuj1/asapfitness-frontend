export type TClass = {
  id: string;
  categoryId: string;
  classOrder: number;
  title: string;
  subtitle: string;
  trainerName: string | null;
  achievements: string[];
  equipmentName: string[];
  videoKey: string;
  thumbKey: string;
  durationSeconds: number;
  createdAt: string;
  updatedAt: string;
  videoUrl: string;
  thumbUrl: string;
};

export type TClassCard = Pick<TClass, 'id' | 'thumbUrl' | 'classOrder' | 'title' | 'subtitle'>;
