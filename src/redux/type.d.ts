export type PostTypeData = {
  data: PostType[] | null;
  isLoading: boolean;
  errors: string;
};
export type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
