export type CommunityComment={commentId:string;authorId:string;authorName:string;text:string;createdAt:string};
export type CommunityPost={postId:string;authorId:string;authorName:string;caption:string;imageUrl:string;createdAt:string;expiresAt:string;comments:CommunityComment[]};
export type CommunityFeed={posts:CommunityPost[]};
export type Leaderboard={metric:'saved_pet_stat_total';label:string;entries:{position:number;playerId:string;displayName:string;score:number}[]};
export type PublishInput={commandId:string;caption:string;mimeType:string;imageBase64:string;shareConsent:boolean};
export type CommentInput={commandId:string;text:string;shareConsent:boolean};
export type PublicationResult={postId:string;withdrawn:boolean};
