<?php declare(strict_types=1);

namespace boxblinkracer\NotificationCenter\Subscriber;

use Shopware\Core\System\SystemConfig\SystemConfigService;
use Shopware\Storefront\Event\StorefrontRenderEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;


class StorefrontSubscriber implements EventSubscriberInterface
{

    /**
     * @var SystemConfigService
     */
    private $configService;


    /**
     * @param SystemConfigService $configService
     */
    public function __construct(SystemConfigService $configService)
    {
        $this->configService = $configService;
    }


    /**
     * @inheritDoc
     */
    public static function getSubscribedEvents()
    {
        return [
            StorefrontRenderEvent::class => 'onStorefrontRender',
        ];
    }

    /**
     * @param StorefrontRenderEvent $event
     */
    public function onStorefrontRender(StorefrontRenderEvent $event)
    {
        $active = $this->configService->get('NotificationCenter.config.active');
        $text = $this->configService->get('NotificationCenter.config.text');
        $colorBackground = $this->configService->get('NotificationCenter.config.colorBackground');
        $colorText = $this->configService->get('NotificationCenter.config.colorText');

        $data = [
            'active' => $active && !empty($text),
            'text' => $text,
            'color' => [
                'background' => $colorBackground,
                'text' => $colorText,
            ]
        ];

        $event->setParameter('notificationCenter', $data);
    }

}
