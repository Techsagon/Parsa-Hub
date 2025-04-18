import React from 'react';
import { Play, Clock } from 'lucide-react';
import { Video } from '../types';

interface VideoCardProps {
  video: Video;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  return (
    <div className="group relative rounded-lg overflow-hidden bg-gray-900">
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={video.thumbnail} 
          alt={video.title} 
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        
        {/* Duration Badge */}
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs font-medium px-2 py-1 rounded">
          <span className="flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            {video.duration}
          </span>
        </div>
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-purple-400 bg-opacity-90 rounded-full p-3 transform transition-transform duration-300 group-hover:scale-110">
            <Play className="h-6 w-6 text-white" fill="white" />
          </div>
        </div>
      </div>
      
      <div className="p-3">
        <h3 className="font-medium text-white text-sm line-clamp-2 mb-1">
          {video.title}
        </h3>
        
        <div className="flex items-center text-xs text-gray-400">
          <span className="flex items-center">
            {video.author}
            {video.verified && (
              <span className="ml-1 bg-purple-400 bg-opacity-20 text-purple-400 text-xs px-1.5 py-0.5 rounded">
                ✓
              </span>
            )}
          </span>
          <span className="mx-1.5">•</span>
          <span>{video.views} views</span>
          <span className="mx-1.5">•</span>
          <span>{video.uploadedAt}</span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;