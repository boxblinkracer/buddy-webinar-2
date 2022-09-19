<?php declare(strict_types=1);

namespace boxblinkracer\NotificationCenter;

use Exception;
use Shopware\Core\Framework\Plugin;
use Shopware\Core\Framework\Plugin\Context\ActivateContext;
use Shopware\Core\Framework\Plugin\Context\DeactivateContext;
use Shopware\Core\Framework\Plugin\Context\InstallContext;
use Shopware\Core\Framework\Plugin\Context\UninstallContext;
use Shopware\Core\Framework\Plugin\Context\UpdateContext;
use Symfony\Component\DependencyInjection\ContainerBuilder;

class NotificationCenter extends Plugin
{

    /**
     * @param ContainerBuilder $container
     * @throws Exception
     */
    public function build(ContainerBuilder $container): void
    {
        parent::build($container);

        $this->container = $container;
    }

    /**
     * @return void
     */
    public function boot(): void
    {
        parent::boot();
    }

    /**
     * @param InstallContext $context
     * @return void
     */
    public function install(InstallContext $context): void
    {
        parent::install($context);
    }

    /**
     * @param UpdateContext $context
     * @return void
     */
    public function update(UpdateContext $context): void
    {
        parent::update($context);
    }

    /**
     * @param InstallContext $context
     * @return void
     */
    public function postInstall(InstallContext $context): void
    {
        parent::postInstall($context);
    }

    /**
     * @param UninstallContext $context
     * @return void
     */
    public function uninstall(UninstallContext $context): void
    {
        parent::uninstall($context);
    }

    /**
     * @param ActivateContext $context
     * @return void
     * @throws \Doctrine\DBAL\Exception
     */
    public function activate(ActivateContext $context): void
    {
        parent::activate($context);
    }

    /**
     * @param DeactivateContext $context
     * @return void
     */
    public function deactivate(DeactivateContext $context): void
    {
        parent::deactivate($context);
    }

}
